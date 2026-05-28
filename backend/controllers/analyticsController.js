import Transaction from "../models/Transaction.js";
import Wallet from "../models/Wallet.js";

export const getSummary = async (req, res) => {
    try {
        const userId = req.user._id;

        const data = await Transaction.aggregate([
            { $match: { user: userId } },
            {
                $group: {
                    _id: "$type",
                    total: { $sum: "$amount" }
                }
            }
        ]);

        let income = 0;
        let expense = 0;

        data.forEach(item => {
            if (item._id === "income") income = item.total;
            if (item._id === "expense") expense = item.total;
        });

        const walletData = await Wallet.aggregate([
            { $match: { user: userId } },
            { $group: { _id: null, totalBalance: { $sum: "$balance" } } }
        ]);

        const balance = walletData[0]?.totalBalance || 0;
        const savingsRate = income > 0 ? (balance / income) * 100 : 0;

        res.json({
            success: true,
            data: {
                income,
                expense,
                balance,
                savingsRate: savingsRate.toFixed(2)
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getMonthlyStats = async (req, res) => {
    try {
        const userId = req.user._id;

        const data = await Transaction.aggregate([
            { $match: { user: userId } },
            {
                $group: {
                    _id: {
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" },
                        type: "$type"
                    },
                    total: { $sum: "$amount" }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        res.json({ success: true, data });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getCategoryStats = async (req, res) => {
    try {
        const userId = req.user._id;

        const data = await Transaction.aggregate([
            {
                $match: {
                    user: userId,
                    type: "expense"
                }
            },
            {
                $group: {
                    _id: "$category",
                    total: { $sum: "$amount" }
                }
            },
            { $sort: { total: -1 } }
        ]);

        res.json({
            success: true,
            data
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getWalletStats = async (req, res) => {
    try {
        const userId = req.user._id;

        const data = await Transaction.aggregate([
            { $match: { user: userId } },
            {
                $group: {
                    _id: "$wallet",
                    income: {
                        $sum: {
                            $cond: [{ $eq: ["$type", "income"] }, "$amount", 0]
                        }
                    },
                    expense: {
                        $sum: {
                            $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0]
                        }
                    }
                }
            }
        ]);

        res.json({
            success: true,
            data
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};