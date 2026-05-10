import Router from "express";
const router = Router();

import {authMiddleware} from "../middleware/authMiddleware.js";
import { createWallet, getWallets, getSingleWallet, updateWallet, deleteWallet } from "../controllers/walletController.js";

router.post('/', authMiddleware, createWallet);
router.get('/', authMiddleware, getWallets);
router.get('/:id', authMiddleware, getSingleWallet);
router.put('/:id', authMiddleware, updateWallet);
router.delete('/:id', authMiddleware, deleteWallet);

export default router;