import Router from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { updateUserValidation } from "../validation/userValidation.js";
import { validate } from "../middleware/validateMiddleware.js";
import { getProfile, updateProfile, deleteAccount } from "../controllers/userController.js";

router.get('/profile', authMiddleware , getProfile);
router.put('/profile', authMiddleware, upload.single('avatar') , updateUserValidation, validate , updateProfile);
router.delete('/profile', authMiddleware, deleteAccount);

export default router;