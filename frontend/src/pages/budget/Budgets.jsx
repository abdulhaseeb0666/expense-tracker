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

            console.log(error.response?.data);

            toast.error(
                error.response?.data?.message ||
                "Failed to create budget"
            );
        }
    };

    return (
        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Budgets
                </h1>

                <Button onClick={() => setOpenModal(true)}>
                    Add Budget
                </Button>

            </div>

            {loading ? (
                <Loader />
            ) : formattedBudgets.length > 0 ? (

                <BudgetList budgets={formattedBudgets} />

            ) : (

                <div className="bg-white p-6 rounded shadow text-center">

                    <p className="text-gray-500">
                        No budgets found
                    </p>

                </div>

            )}

            <Modal isOpen={openModal}>

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-xl font-bold">
                        Add Budget
                    </h2>

                    <button
                        onClick={() => setOpenModal(false)}
                        className="text-red-500 text-lg"
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