import Router from "express";
const router = Router();

import {authMiddleware} from "../middleware/authMiddleware.js";
import {validate} from "../middleware/validateMiddleware.js";
import {transactionValidation} from "../validation/transactionValidation.js";
import { createTransaction, getTransactions, getTransactionStats, getSingleTransaction, updateTransaction, deleteTransaction } from "../controllers/transactionController.js";

router.post('/', authMiddleware, transactionValidation, validate, createTransaction);
router.get('/', authMiddleware, getTransactions);
router.get('/stats', authMiddleware, getTransactionStats);
router.get('/:id', authMiddleware, getSingleTransaction);
router.put('/:id', authMiddleware, updateTransaction);
router.delete('/:id', authMiddleware, deleteTransaction);

export default router;