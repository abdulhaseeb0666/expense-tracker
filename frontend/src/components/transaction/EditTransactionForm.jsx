// src/components/transaction/EditTransactionForm.jsx

import { useState } from "react";

const EditTransactionForm = ({
    transaction,
    wallets = [],
    onSubmit
}) => {

    const [formData, setFormData] = useState({
        wallet:
            transaction?.wallet?._id ||
            transaction?.wallet ||
            "",

        type: transaction?.type || "expense",

        category: transaction?.category || "",

        title: transaction?.title || "",

        amount: transaction?.amount || "",

        note: transaction?.note || ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            ...formData,
            amount: Number(formData.amount)
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            {/* Wallet */}
            <select
                name="wallet"
                value={formData.wallet}
                onChange={handleChange}
                className="w-full border p-3 rounded"
                required
            >

                <option value="">
                    Select Wallet
                </option>

                {wallets.map((wallet) => (
                    <option
                        key={wallet._id}
                        value={wallet._id}
                    >
                        {wallet.name}
                    </option>
                ))}

            </select>

            {/* Type */}
            <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border p-3 rounded"
            >

                <option value="income">
                    Income
                </option>

                <option value="expense">
                    Expense
                </option>

            </select>

            {/* Category */}
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-3 rounded"
            />

            {/* Title */}
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-3 rounded"
            />

            {/* Amount */}
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border p-3 rounded"
            />

            {/* Note */}
            <textarea
                name="note"
                placeholder="Note"
                value={formData.note}
                onChange={handleChange}
                className="w-full border p-3 rounded"
                rows={4}
            />

            <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded"
            >
                Update Transaction
            </button>

        </form>
    );
};

export default EditTransactionForm;