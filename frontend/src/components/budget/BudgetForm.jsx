import { useState } from "react";

const BudgetForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        category: "",
        amount: "",
        period: "monthly"
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form className="space-y-3" onSubmit={handleSubmit}>
            <input
                name="category"
                placeholder="Category"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                name="amount"
                placeholder="Budget Amount"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <select
                name="period"
                onChange={handleChange}
                className="border p-2 w-full"
            >
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
            </select>

            <button className="bg-black text-white p-2 w-full">
                Create Budget
            </button>
        </form>
    );
};

export default BudgetForm;