import { FaRegTrashAlt , FaEdit} from "react-icons/fa";
import useBudgets from "../../hooks/useBudget";
import { toast } from "react-toastify";
import EditBudgetForm from "./Edit BudgetForm";
import Modal from "../common/Modal";
import Loader from "../../components/common/Loader";
import { useState , useEffect } from "react";

const BudgetCard = ({ budget }) => {

    const { removeBudget , editBudget } = useBudgets();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            `Delete "${budget.category}" budget?`
        );

        if (confirmDelete) {
            await removeBudget(budget._id);
            window.location.reload();
        }
    };

    const handleEdit = async (formData) => {
         try {

            await editBudget(
                budget._id,
                {
                    category: formData.category,
                    amount: Number(formData.amount),
                    period: formData.period
                }
            );

            toast.success("Budget updated successfully");
            setIsEditModalOpen(false);
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            
        } catch (error) {

            console.log(error.response?.data);

            toast.error(
                error.response?.data?.message ||
                "Failed to update budget"
            );

        }
    }

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

                <div className="flex gap-2">
                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="
                            p-2
                            rounded-xl
                            bg-red-50
                            text-red-500
                            hover:bg-red-100
                        "
                    >
                        <FaEdit />
                    </button>

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

            <Modal isOpen={isEditModalOpen}>

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold text-[#2F6B5F]">
                        Edit Budget
                    </h2>

                    <button
                        onClick={() => setIsEditModalOpen(false)}
                        className="text-red-500"
                    >
                        ✕
                    </button>

                </div>

                <EditBudgetForm
                    budget={budget}
                    onSubmit={handleEdit}
                />

            </Modal>

        </div>
    );
};

export default BudgetCard;