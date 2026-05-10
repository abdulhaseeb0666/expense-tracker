import Router from "express";
const router = Router();

import {authMiddleware , authLimiter} from "../middleware/authMiddleware.js";
import {validate} from "../middleware/validateMiddleware.js";
import {registerValidation, loginValidation} from "../validation/authValidation.js";
import { register, login, logout, getMe } from "../controllers/authController.js";

router.post("/register", registerValidation, authLimiter, validate, register);
router.post("/login", loginValidation, authLimiter, validate, login);
router.post('/logout', authMiddleware, logout);
router.get('/me', authMiddleware, getMe);

export default router;