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

            <div className="space-y-6">

                {/* Page Header */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        border border-[#D9E8E3]
                        shadow-lg
                        p-6
                    "
                >

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>

                            <h1 className="text-3xl font-bold text-[#2F6B5F]">
                                Transactions
                            </h1>

                            <p className="text-slate-500 mt-1">
                                Track and manage your income and expenses
                            </p>

                        </div>

                        <Button
                            onClick={() => setOpenModal(true)}
                            className="
                                bg-[#2F6B5F]
                                hover:bg-[#24564C]
                                px-6
                            "
                        >
                            + Add Transaction
                        </Button>

                    </div>

                </div>

                {/* Filters Section */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        border border-[#D9E8E3]
                        shadow-md
                        p-5
                    "
                >

                    <div className="flex items-center justify-between mb-4">

                        <h2 className="font-semibold text-lg text-slate-700">
                            Filters
                        </h2>

                        <span className="text-sm text-slate-400">
                            Refine transaction history
                        </span>

                    </div>

                    <TransactionFilters setFilter={setFilter} />

                </div>

                {/* Transaction List */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        border border-[#D9E8E3]
                        shadow-lg
                        overflow-hidden
                    "
                >

                    <div
                        className="
                            px-6
                            py-4
                            border-b
                            border-[#D9E8E3]
                            bg-[#F7FAF9]
                        "
                    >

                        <h2 className="font-semibold text-lg text-slate-700">
                            Transaction History
                        </h2>

                    </div>

                    <div className="p-6">

                        {loading ? (

                            <Loader />

                        ) : filteredTransactions.length > 0 ? (

                            <TransactionList
                                transactions={filteredTransactions}
                            />

                        ) : (

                            <div className="text-center py-16">

                                <div
                                    className="
                                        w-20 h-20
                                        rounded-full
                                        bg-[#EAF4F1]
                                        flex
                                        items-center
                                        justify-center
                                        mx-auto
                                        mb-4
                                    "
                                >
                                    💸
                                </div>

                                <h3 className="text-lg font-semibold text-slate-700">
                                    No Transactions Found
                                </h3>

                                <p className="text-slate-500 mt-2">
                                    Start tracking your finances by adding
                                    your first transaction.
                                </p>

                                <Button
                                    onClick={() => setOpenModal(true)}
                                    className="mt-5"
                                >
                                    Add Transaction
                                </Button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

            {/* Add Transaction Modal */}
            <Modal isOpen={openModal}>

                <div className="space-y-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold text-[#2F6B5F]">
                                Add Transaction
                            </h2>

                            <p className="text-sm text-slate-500">
                                Record a new income or expense
                            </p>

                        </div>

                        <button
                            onClick={() => setOpenModal(false)}
                            className="
                                w-10 h-10
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

                    <div className="border-t border-[#D9E8E3] pt-5">

                        <TransactionForm
                            onSubmit={handleCreateTransaction}
                            wallets={wallets}
                        />

                    </div>

                </div>

            </Modal>

        </DashboardLayout>
    );
};

export default Transactions;