import Wallet from "../models/Wallet.js";
import Transaction from "../models/Transaction.js";

export const createWallet = async (req, res) => {
    try {
        const userId = req.user._id;

        const { name, balance = 0, type } = req.body;

        const walletExists = await Wallet.findOne({ user: userId, name });

        if (walletExists) {
            return res.status(400).json({
                success: false,
                message: "Wallet already exists"
            });
        }

        const wallet = await Wallet.create({
            user: userId,
            name,
            balance,
            type
        });

        res.status(201).json({
            success: true,
            message: "Wallet created",
            wallet
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getWallets = async (req, res) => {
    try {
        const wallets = await Wallet.find({
            user: req.user._id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            wallets
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getSingleWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!wallet) {
            return res.status(404).json({
                success: false,
                message: "Wallet not found"
            });
        }

        res.status(200).json({
            success: true,
            wallet
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!wallet) {
            return res.status(404).json({
                success: false,
                message: "Wallet not found"
            });
        }

        const { name, type } = req.body;

        if (name) wallet.name = name;
        if (type) wallet.type = type;

        await wallet.save();

        res.status(200).json({
            success: true,
            message: "Wallet updated",
            wallet
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!wallet) {
            return res.status(404).json({
                success: false,
                message: "Wallet not found"
            });
        }

        // 🔥 Remove all related transactions first
        await Transaction.deleteMany({
            wallet: wallet._id
        });

        // 🔥 Delete wallet itself
        await wallet.deleteOne();

        res.status(200).json({
            success: true,
            message: "Wallet and related transactions deleted"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};