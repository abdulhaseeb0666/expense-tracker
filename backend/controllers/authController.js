import User from "../models/User.js";
import PendingUser from "../models/PendingUser.js";
import Session from "../models/Session.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {sendOTP} from "../services/emailServices.js";

export const registerWithEmail = async ( req, res ) => {
    try {

        const {
            name,
            email,
            password,
            confirmPassword
        } = req.body;

        if(password!=confirmPassword){

            return res.status(400).json({
                success: false,
                message:
                    "Passwords do not match"
            });
        }

        const existingUser =
            await User.findOne({
                email
            });

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message:
                    "User already exists"
            });

        }

        const otp = Math.floor(
            100000 +
            Math.random() * 900000
        ).toString();

        await PendingUser.deleteOne({
            email
        });

        await PendingUser.create({
            name,
            email,
            password,
            otp,
            otpExpires:
                Date.now() +
                10 * 60 * 1000
        });

        await sendOTP(email, otp);

        return res.status(200).json({
            success: true,
            message:
                "OTP sent successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const verifyEmailOTP = async (
    req,
    res
) => {

    try {

        const {
            email,
            otp
        } = req.body;

        const pendingUser =
            await PendingUser.findOne({
                email
            });

        if (!pendingUser) {

            return res.status(404).json({
                success: false,
                message:
                    "Pending registration not found"
            });

        }

        if (
            pendingUser.otp !== otp
        ) {

            return res.status(400).json({
                success: false,
                message:
                    "Invalid OTP"
            });

        }

        if (
            pendingUser.otpExpires <
            Date.now()
        ) {

            return res.status(400).json({
                success: false,
                message:
                    "OTP expired"
            });

        }

        const hashedPassword =
            await bcrypt.hash(
                pendingUser.password,
                10
            );

        const user =
            await User.create({
                name:
                    pendingUser.name,
                email:
                    pendingUser.email,
                password:
                    hashedPassword,
                provider: "local"
            });

        await PendingUser.deleteOne({
            _id: pendingUser._id
        });

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        await Session.create({
            user: user._id,
            refreshToken: token,
            expiresAt:
                new Date(
                    Date.now() +
                    7 * 24 * 60 * 60 * 1000
                )
        });

        return res.status(201).json({
            success: true,
            message: "Registration successful",
            token,
            user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const googleAuthSuccess = async (req, res) => {

    const token = jwt.sign(
        {
            id: req.user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    res.redirect(
        `http://expense-tracker-by-ah.vercel.app/oauth-success?token=${token}`
    );

};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Account does not exist"
            });
        }

        // 2. Check password
        if (user.provider === "google") {
            return res.status(400).json({
                success: false,
                message:
                    "This account uses Google Sign-In"
            });
        } else{
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                });
            }
        }

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // 4. Create session
        await Session.create({
            user: user._id,
            refreshToken: token,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

        // 5. Send response
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const logout = async (req, res) => {
    try {
        const userId = req.user._id;

        // 1. Remove all sessions for this user
        await Session.deleteMany({ user: userId });

        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};