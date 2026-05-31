import { FaRegTrashAlt } from "react-icons/fa";
import useBudgets from "../../hooks/useBudget";
const BudgetCard = ({ budget }) => {

    const { removeBudget } = useBudgets();

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            `Delete "${budget.category}" budget?`
        );

        if (confirmDelete) {
            await removeBudget(budget._id);
            window.location.reload();
        }
    };

    return (
        <div
            className="
                bg-white
                border
                border-[#D9E8E3]
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition
            "
        >

            <div className="flex justify-between items-start">

                <div>

                    <div
                        className="
                            inline-flex
                            items-center
                            px-3
                            py-1
                            rounded-full
                            bg-[#EAF4F1]
                            text-[#2F6B5F]
                            text-sm
                            font-medium
                        "
                    >
                        {budget.category}
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            mt-4
                            text-slate-800
                        "
                    >
                        Rs {budget.budget}
                    </h2>

                    <p className="text-slate-500">
                        Budget Limit
                    </p>

                </div>

                <button
                    onClick={handleDelete}
                    className="
                        p-2
                        rounded-xl
                        bg-red-50
                        text-red-500
                        hover:bg-red-100
                    "
                >
                    <FaRegTrashAlt />
                </button>

            </div>

            <div className="mt-6">

                <div className="flex justify-between text-sm mb-2">

                    <span className="text-slate-500">
                        Spent
                    </span>

                    <span className="font-semibold text-slate-700">
                        Rs {budget.spent}
                    </span>

                </div>

                <div
                    className="
                        w-full
                        h-3
                        bg-[#EAF4F1]
                        rounded-full
                        overflow-hidden
                    "
                >

                    <div
                        style={{
                            width: `${Math.min(
                                budget.percentageUsed,
                                100
                            )}%`
                        }}
                        className={`
                            h-full
                            transition-all
                            duration-500
                            ${
                                budget.exceeded
                                    ? "bg-red-500"
                                    : budget.percentageUsed > 80
                                    ? "bg-yellow-500"
                                    : "bg-[#2F6B5F]"
                            }
                        `}
                    />

                </div>

                <div className="flex justify-between mt-3">

                    <span className="text-sm text-slate-500">
                        Progress
                    </span>

                    <span
                        className={`
                            text-sm font-semibold
                            ${
                                budget.exceeded
                                    ? "text-red-500"
                                    : "text-[#2F6B5F]"
                            }
                        `}
                    >
                        {budget.percentageUsed.toFixed(0)}%
                    </span>

                </div>

            </div>

            {budget.exceeded && (

                <div
                    className="
                        mt-4
                        p-3
                        rounded-xl
                        bg-red-50
                        text-red-600
                        text-sm
                        font-medium
                    "
                >
                    ⚠ Budget limit exceeded
                </div>

            )}

        </div>
    );
};

export default BudgetCard;