import { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        type: "expense",
        category: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 w-full" />

            <input name="amount" placeholder="Amount" onChange={handleChange} className="border p-2 w-full" />

            <select name="type" onChange={handleChange} className="border p-2 w-full">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <input name="category" placeholder="Category" onChange={handleChange} className="border p-2 w-full" />

            <button className="bg-black text-white p-2 w-full">
                Add Transaction
            </button>
        </form>
    );
};

export default TransactionForm;