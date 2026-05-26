// src/pages/transaction/Transactions.jsx

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import TransactionList from "../../components/transaction/TransactionList";
import TransactionForm from "../../components/transaction/TransactionForm";
import TransactionFilters from "../../components/transaction/TransactionFilters";

import useWallets from "../../hooks/useWallet";

import Loader from "../../components/common/Loader";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";

import useTransactions from "../../hooks/useTransactions";

const Transactions = () => {

    const { wallets } = useWallets();

    const {
        transactions,
        loading,
        error,
        addTransaction
    } = useTransactions();

    const [filter, setFilter] = useState("all");

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {

        if (error) {
            toast.error(error);
        }

    }, [error]);

    const filteredTransactions = useMemo(() => {

        if (filter === "all") {
            return transactions;
        }

        return transactions.filter(
            (transaction) => transaction.type === filter
        );

    }, [transactions, filter]);

    const handleCreateTransaction = async (formData) => {

        try {

            await addTransaction({
                wallet: formData.wallet, 
                title: formData.title,
                amount: Number(formData.amount),
                type: formData.type,
                category: formData.category,
                note: formData.note
            });

            toast.success("Transaction created successfully");

            setOpenModal(false);

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Transactions
                </h1>

                <Button onClick={() => setOpenModal(true)}>
                    Add Transaction
                </Button>

            </div>

            <div className="mb-6">

                <TransactionFilters setFilter={setFilter} />

            </div>

            {loading ? (
                <Loader />
            ) : filteredTransactions.length > 0 ? (
                <TransactionList
                    transactions={filteredTransactions}
                />
            ) : (
                <div className="bg-white p-6 rounded shadow text-center">

                    <p className="text-gray-500">
                        No transactions found
                    </p>

                </div>
            )}

            <Modal isOpen={openModal}>

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-xl font-bold">
                        Add Transaction
                    </h2>

                    <button
                        onClick={() => setOpenModal(false)}
                        className="text-red-500 text-lg"
                    >
                        ✕
                    </button>

                </div>

                <TransactionForm
                    onSubmit={handleCreateTransaction}
                    wallets={wallets}
                />

            </Modal>

        </DashboardLayout>
    );
};

export default Transactions;