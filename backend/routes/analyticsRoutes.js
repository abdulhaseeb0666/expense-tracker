import Router from "express";
const router = Router();

import {authMiddleware} from "../middleware/authMiddleware.js";
import { getSummary, getMonthlyStats, getCategoryStats, getWalletStats } from "../controllers/analyticsController.js";

router.get("/summary", authMiddleware, getSummary);
router.get("/monthly", authMiddleware, getMonthlyStats);
router.get("/categories", authMiddleware, getCategoryStats);
router.get("/wallets", authMiddleware, getWalletStats);

export default router;