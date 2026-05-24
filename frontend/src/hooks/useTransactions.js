import { useEffect, useState } from "react";
import {
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../services/transactionService";

const useTransactions = () => {

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTransactions = async () => {
        try {
            setLoading(true);

            const data = await getTransactions();

            setTransactions(data.transactions);

        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const addTransaction = async (transactionData) => {
        const data = await createTransaction(transactionData);

        setTransactions((prev) => [
            data.transaction,
            ...prev
        ]);

        return data;
    };

    const editTransaction = async (id, transactionData) => {
        const data = await updateTransaction(id, transactionData);
        setTransactions((prev) =>
            prev.map((item) =>
                item._id === id
                    ? data.transaction
                    : item
            )
        );

        return data;
    };

    const removeTransaction = async (id) => {
        await deleteTransaction(id);

        setTransactions((prev) =>
            prev.filter((item) => item._id !== id)
        );
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return {
        transactions,
        loading,
        error,
        fetchTransactions,
        addTransaction,
        editTransaction,
        removeTransaction
    };
};
export default useTransactions;