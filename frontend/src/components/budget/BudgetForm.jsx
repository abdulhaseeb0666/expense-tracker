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
        <form
            className="space-y-5"
            onSubmit={handleSubmit}
        >

            <div>

                <label
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-600
                        mb-2
                    "
                >
                    Category
                </label>

                <input
                    name="category"
                    placeholder="Food, Shopping, Travel..."
                    onChange={handleChange}
                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#5E9C89]
                    "
                />

            </div>

            <div>

                <label
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-600
                        mb-2
                    "
                >
                    Budget Amount
                </label>

                <input
                    name="amount"
                    placeholder="Enter amount"
                    onChange={handleChange}
                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#5E9C89]
                    "
                />

            </div>

            <div>

                <label
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-600
                        mb-2
                    "
                >
                    Budget Period
                </label>

                <select
                    name="period"
                    onChange={handleChange}
                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#5E9C89]
                    "
                >
                    <option value="monthly">
                        Monthly
                    </option>

                    <option value="weekly">
                        Weekly
                    </option>

                </select>

            </div>

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
                Create Budget
            </button>

        </form>
    );
};

export default BudgetForm;