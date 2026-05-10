import express from "express";

import {
    createBudget,
    getBudgets,
    updateBudget,
    deleteBudget,
    getBudgetStatus
} from "../controllers/budgetController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createBudget);
router.get("/", authMiddleware, getBudgets);
router.get("/status", authMiddleware, getBudgetStatus);
router.put("/:id", authMiddleware, updateBudget);
router.delete("/:id", authMiddleware, deleteBudget);

export default router;