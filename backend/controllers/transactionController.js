import Transaction from "../models/Transaction.js";
import Wallet from "../models/Wallet.js";

export const createTransaction = async (req, res) => {
    try {
        const userId = req.user._id;


        const {
            wallet,
            type,
            category,
            title,
            amount,
            note
        } = req.body;

        const currentwallet = await Wallet.findOne({
            _id: wallet,
            user: userId
        });

        if(!currentwallet) {
            return res.status(404).json({
                success: false,
                message: "Wallet not found"
            });
        }
        
        if(type==="expense" && currentwallet.balance < amount) {
            return res.status(400).json({
                success: false,
                message: "Insufficient balance"
            });
        }

        // 1. Create transaction
        const transaction = await Transaction.create({
            user: userId,
            wallet : currentwallet._id,
            type,
            category,
            title,
            amount,
            note
        });

        if (currentwallet) {
            if (type === "income") {
                currentwallet.balance += Number(amount);
            } else {
                currentwallet.balance -= Number(amount);
            }

            await currentwallet.save();
        }

        res.status(201).json({
            success: true,
            message: "Transaction created",
            transaction
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const userId = req.user._id;

        const transactions = await Transaction.find({ user: userId })
            .populate("wallet")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            transactions
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getSingleTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            _id: req.params.id,
            user: req.user._id
        }).populate("wallet");

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found"
            });
        }

        res.status(200).json({
            success: true,
            transaction
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found"
            });
        }

        const oldAmount = transaction.amount;
        const oldType = transaction.type;

        const {
            type,
            category,
            title,
            amount,
            note
        } = req.body;

        // Update fields
        transaction.type = type || transaction.type;
        transaction.category = category || transaction.category;
        transaction.title = title || transaction.title;
        transaction.amount = amount ?? transaction.amount;
        transaction.note = note || transaction.note;

        await transaction.save();

        // Adjust wallet balance if amount/type changed
        const wallet = await Wallet.findById(transaction.wallet);

        if (wallet) {
            // revert old transaction
            if (oldType === "income") {
                wallet.balance -= oldAmount;
            } else {
                wallet.balance += oldAmount;
            }

            // apply new transaction
            if (transaction.type === "income") {
                wallet.balance += transaction.amount;
            } else {
                wallet.balance -= transaction.amount;
            }

            await wallet.save();
        }

        res.status(200).json({
            success: true,
            message: "Transaction updated",
            transaction
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found"
            });
        }

        // Reverse wallet effect
        const wallet = await Wallet.findById(transaction.wallet);

        if (wallet) {
            if (transaction.type === "income") {
                wallet.balance -= transaction.amount;
            } else {
                wallet.balance += transaction.amount;
            }

            await wallet.save();
        }

        await transaction.deleteOne();

        res.status(200).json({
            success: true,
            message: "Transaction deleted"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getTransactionStats = async (req, res) => {
    try {
        const userId = req.user._id;

        const stats = await Transaction.aggregate([
            { $match: { user: userId } },

            {
                $group: {
                    _id: "$type",
                    total: { $sum: "$amount" }
                }
            }
        ]);

        const result = {
            income: 0,
            expense: 0
        };

        stats.forEach(item => {
            if (item._id === "income") {
                result.income = item.total;
            } else {
                result.expense = item.total;
            }
        });

        res.status(200).json({
            success: true,
            stats: result,
            balance: result.income - result.expense
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};