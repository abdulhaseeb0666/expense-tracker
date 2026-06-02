import { useState } from "react";
import {CATEGORIES} from "../../utils/constants";

const EditBudgetForm = ({
    budget,
    onSubmit
}) => {

    const [formData, setFormData] = useState({
        category: budget?.category || "",
        amount: budget?.amount || "",
        period: budget?.period || "monthly"
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

            {/* Category */}

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

                <select
                    name="category"
                    value={formData.category}
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
                    required
                >

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

            {/* Amount */}

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
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter budget amount"
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
                    required
                />

            </div>

            {/* Period */}

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
                    value={formData.period}
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

            {/* Submit Button */}

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
                Update Budget
            </button>

        </form>

    );
};

export default EditBudgetForm;