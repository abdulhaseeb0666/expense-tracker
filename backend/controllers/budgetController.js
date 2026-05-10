import Budget from "../models/Budget.js";
import Transaction from "../models/Transaction.js";

export const createBudget = async (req, res) => {
    try {
        const budget = await Budget.create({
            user: req.user._id,
            category: req.body.category,
            amount: req.body.amount,
            period: req.body.period
        });

        res.status(201).json({
            success: true,
            budget
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({
            user: req.user._id
        });

        res.json({
            success: true,
            budgets
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getBudgetStatus = async (req, res) => {
    try {
        const budgets = await Budget.find({
            user: req.user._id
        });

        const results = [];

        for (const budget of budgets) {

            const spentData = await Transaction.aggregate([
                {
                    $match: {
                        user: req.user._id,
                        type: "expense",
                        category: budget.category,
                        createdAt: {
                            $gte: new Date(
                                new Date().getFullYear(),
                                new Date().getMonth(),
                                1
                            )
                        }
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalSpent: { $sum: "$amount" }
                    }
                }
            ]);

            const spent = spentData[0]?.totalSpent || 0;

            const remaining = budget.amount - spent;

            const percentageUsed =
                (spent / budget.amount) * 100;

            results.push({
                category: budget.category,
                budget: budget.amount,
                spent,
                remaining,
                percentageUsed: percentageUsed.toFixed(2),
                exceeded: spent > budget.amount
            });
        }

        res.json({
            success: true,
            budgets: results
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateBudget = async (req, res) => {
    try {
        const budget = await Budget.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user._id
            },
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            budget
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteBudget = async (req, res) => {
    try {
        await Budget.deleteOne({
            _id: req.params.id,
            user: req.user._id
        });

        res.json({
            success: true,
            message: "Budget deleted"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};