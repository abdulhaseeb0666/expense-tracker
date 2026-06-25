import Router from "express";
import passport from "./../config/passport.js";
import session from "express-session";
import jwt from "jsonwebtoken";

const router = Router();


const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/google/callback",
    passport.authenticate(
        "google",
        {
            failureRedirect: "/login"
        }
    ),
    async (req, res) => {

        const token = generateToken(req.user._id);

        res.redirect( 
            `http://expense-tracker-by-ah.vercel.app/oauth-success?token=${token}`
        );
    }
);

import {authMiddleware , authLimiter} from "../middleware/authMiddleware.js";
import {validate} from "../middleware/validateMiddleware.js";
import {registerValidation, loginValidation} from "../validation/authValidation.js";
import {verifyEmailOTP , registerWithEmail, googleAuthSuccess, login, logout, getMe } from "../controllers/authController.js";

router.post("/verify-email-otp", authLimiter, validate, verifyEmailOTP);
router.post("/register-email", registerValidation, authLimiter, validate, registerWithEmail);
router.post("/login", loginValidation, authLimiter, validate, login);
router.post('/logout', authMiddleware, logout);
router.get('/me', authMiddleware, getMe);

export default router;