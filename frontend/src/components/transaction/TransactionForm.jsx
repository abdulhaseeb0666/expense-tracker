import { useState } from "react";

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
            className="space-y-3"
        >

            <select
                name="wallet"
                value={form.wallet}
                onChange={handleChange}
                className="border p-2 w-full"
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

            <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="border p-2 w-full"
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
                value={form.category}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <textarea
                name="note"
                placeholder="Note"
                value={form.note}
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <button className="bg-black text-white p-2 w-full rounded">
                Add Transaction
            </button>

        </form>
    );
};

export default TransactionForm;