import { useState } from "react";
import {CATEGORIES} from "../../utils/constants";

const TransactionForm = ({ onSubmit ,  wallets = [] }) => {


    const [form, setForm] = useState({
        wallet: "",
        title: "",
        amount: "",
        type: "expense",
        category: "",
        note: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
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
                    value={form.wallet}
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
                value={form.title}
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
                value={form.amount}
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
                    value={form.type}
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

                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                    "
                >
                    <option value="">
                        Select Category
                    </option>
                    
                    {CATEGORIES.map((category) => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>

            </div>

            <textarea
                name="note"
                placeholder="Additional Notes..."
                value={form.note}
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
                Add Transaction
            </button>

        </form>
    );
};

export default TransactionForm;