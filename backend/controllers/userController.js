import User from "../models/User.js";
import Wallet from "../models/Wallet.js";
import Transaction from "../models/Transaction.js";
import Session from "../models/Session.js";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

export const getProfile = async (req, res) => {
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

export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            if(req.file){
                fs.unlinkSync(req.file.path);
            }
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const { name, email, password, currency } = req.body;

        // Update fields if provided
        if (name) user.name = name;
        if (email) user.email = email;
        if (currency) user.currency = currency;

        
        // If password is being updated, hash it
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }
        
        let oldAvatarPath = null;

        if (req.file) {
            if (user.avatar) {
                oldAvatarPath = path.join(path.resolve(), "public", user.avatar);
            }
            user.avatar = `uploads/avatars/${req.file.filename}`;
        }

        const updatedUser = await user.save();
        
        if(oldAvatarPath){
            if (fs.existsSync(oldAvatarPath)) {
                fs.unlinkSync(oldAvatarPath);
            }
        }

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                currency: updatedUser.currency,
                avatar: updatedUser.avatar
            }
        });

    } catch (error) {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        await Wallet.deleteMany({ user: req.user._id });
        await Transaction.deleteMany({ user: req.user._id });
        await Session.deleteMany({ user: req.user._id });

        if (user.avatar) {
            const oldAvatarPath = path.join(path.resolve(), "public", user.avatar);
            if (fs.existsSync(oldAvatarPath)) {
                fs.unlinkSync(oldAvatarPath);
            }
        }
        await User.findByIdAndDelete(req.user._id);

        res.status(200).json({
            success: true,
            message: "Account deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};