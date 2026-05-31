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
            className="space-y-5"
        >

            <div>
                <label className="block mb-2 text-sm font-medium text-slate-600">
                    Wallet
                </label>

                <select
                    name="wallet"
                    value={formData.wallet}
                    onChange={handleChange}
                    required
                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#5E9C89]
                        disabled
                            text-gray-400
                    "
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
            </div>

            <input
                name="title"
                placeholder="Transaction Title"
                value={formData.title}
                onChange={handleChange}
                className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-[#D9E8E3]
                "
            />

            <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-[#D9E8E3]
                "
            />

            <div className="grid grid-cols-2 gap-4">

                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                    "
                >
                    <option value="expense">
                        Expense
                    </option>

                    <option value="income">
                        Income
                    </option>

                </select>

                <input
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                    "
                />

            </div>

            <textarea
                name="note"
                placeholder="Additional Notes..."
                value={formData.note}
                onChange={handleChange}
                rows={4}
                className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-[#D9E8E3]
                "
            />

            <button
                type="submit"
                className="
                    w-full
                    py-3
                    rounded-xl
                    bg-[#2F6B5F]
                    hover:bg-[#24564C]
                    text-white
                    font-semibold
                    transition
                "
            >
                Save Changes
            </button>

        </form>
    );
};

export default EditTransactionForm;