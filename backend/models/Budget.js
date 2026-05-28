import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    category: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    spent : {
        type: Number,
        default: 0
    },

    period: {
        type: String,
        enum: ["monthly", "weekly"],
        default: "monthly"
    },

    startDate: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;