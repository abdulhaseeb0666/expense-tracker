// src/pages/budget/Budgets.jsx

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import BudgetList from "../../components/budget/BudgetList";
import BudgetForm from "../../components/budget/BudgetForm";

import Loader from "../../components/common/Loader";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";

import useBudgets from "../../hooks/useBudget";

const Budgets = () => {

    const {
        budgets,
        loading,
        error,
        addBudget
    } = useBudgets();

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {

        if (error) {
            toast.error(error);
        }

    }, [error]);

    const formattedBudgets = useMemo(() => {

        return budgets.map((budget) => {

            const spent = budget.spent || 0;

            const percentageUsed =
                budget.amount > 0
                    ? Math.min(
                        Math.round((spent / budget.amount) * 100),
                        100
                    )
                    : 0;

            return {
                ...budget,
                budget: budget.amount,
                spent,
                percentageUsed,
                exceeded: spent > budget.amount
            };
        });

    }, [budgets]);

    const handleCreateBudget = async (formData) => {

        try {

            await addBudget({
                category: formData.category,
                amount: Number(formData.amount),
                period: formData.period
            });

            toast.success("Budget created successfully");

            setOpenModal(false);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create budget"
            );
        }
    };

    return (
        <DashboardLayout>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-4xl font-bold text-[#2F6B5F]">
                        Budget Planner
                    </h1>

                    <p className="text-slate-500 mt-1">
                        Track spending limits and stay financially disciplined
                    </p>

                </div>

                <Button onClick={() => setOpenModal(true)}>
                    + Create Budget
                </Button>

            </div>

            {loading ? (
                <Loader />
            ) : formattedBudgets.length > 0 ? (

                <BudgetList budgets={formattedBudgets} />

            ) : (

                <div
                    className="
                        bg-white
                        border
                        border-[#D9E8E3]
                        rounded-3xl
                        p-12
                        text-center
                        shadow-sm
                    "
                >

                    <h3 className="text-xl font-semibold text-slate-700">
                        No Budgets Created
                    </h3>

                    <p className="text-slate-500 mt-2">
                        Create your first budget and start controlling your spending.
                    </p>

                </div>

            )}

            <Modal isOpen={openModal}>

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h2 className="text-2xl font-bold text-[#2F6B5F]">
                            Create Budget
                        </h2>

                        <p className="text-slate-500 text-sm">
                            Set spending limits for your categories
                        </p>

                    </div>

                    <button
                        onClick={() => setOpenModal(false)}
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-red-50
                            text-red-500
                            hover:bg-red-100
                            transition
                        "
                    >
                        ✕
                    </button>

                </div>

                <BudgetForm
                    onSubmit={handleCreateBudget}
                />

            </Modal>

        </DashboardLayout>
    );
};

export default Budgets;