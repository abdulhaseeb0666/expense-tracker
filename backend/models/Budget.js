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