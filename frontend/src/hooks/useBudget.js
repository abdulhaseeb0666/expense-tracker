import { useEffect, useState } from "react";
import {
    createBudget,
    deleteBudget,
    getBudgets,
    updateBudget
} from "../services/budgetService";

const useBudgets = () => {

    const [budgets, setBudgets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBudgets = async () => {
        try {
            setLoading(true);

            const data = await getBudgets();

            setBudgets(data.budgets);

        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const addBudget = async (budgetData) => {
        const data = await createBudget(budgetData);

        setBudgets((prev) => [
            data.budget,
            ...prev
        ]);

        return data;
    };

    const editBudget = async (id, budgetData) => {
        const data = await updateBudget(id, budgetData);

        setBudgets((prev) =>
            prev.map((budget) =>
                budget._id === id
                    ? data.budget
                    : budget
            )
        );

        return data;
    };

    const removeBudget = async (id) => {
        await deleteBudget(id);

        setBudgets((prev) =>
            prev.filter((budget) => budget._id !== id)
        );
    };

    useEffect(() => {
        fetchBudgets();
    }, []);

    return {
        budgets,
        loading,
        error,
        fetchBudgets,
        addBudget,
        editBudget,
        removeBudget
    };
};

export default useBudgets;