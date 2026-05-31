import formatCurrency from "../../utils/formatCurrency";
import useTransactions from "../../hooks/useTransactions";
import { FaRegTrashAlt , FaEdit } from "react-icons/fa";
import Modal from "../common/Modal";
import { useState , useEffect } from "react";
import EditTransactionForm from "./EditTransactionForm";
import useWallets from "../../hooks/useWallet";
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";

const TransactionCard = ({ transaction }) => {

    const { wallets } = useWallets();
    const { editTransaction ,  removeTransaction ,  error } = useTransactions();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {

        if (error) {
            toast.error(error);
        }

    }, [error]);

    const handleDelete = async () => {
        try{
            const confirmDelete = window.confirm(
                `Delete "${transaction.title}" transaction?`
            );
    
            if (confirmDelete) {
                await removeTransaction(transaction._id);
                window.location.reload();
            }
        }catch (error) {
            toast.error(error.message);
        }
    };

    const handleEdit = async (formData) => {

        try{
            await editTransaction(transaction._id, {
                wallet: formData.wallet,
                title: formData.title,
                amount: Number(formData.amount),
                type: formData.type,
                category: formData.category,
                note: formData.note
            });

            
            setIsEditModalOpen(false);
            toast.success("Transaction updated successfully");

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div
            className="
                bg-white
                border
                border-[#D9E8E3]
                rounded-2xl
                p-5
                shadow-sm
                hover:shadow-md
                transition
            "
        >

            <div className="flex justify-between items-center">

                <div>

                    <h3 className="font-semibold text-lg text-slate-800">
                        {transaction.title}
                    </h3>

                    <div className="flex gap-2 mt-2">

                        <span
                            className="
                                px-3
                                py-1
                                rounded-full
                                bg-[#EAF4F1]
                                text-[#2F6B5F]
                                text-xs
                            "
                        >
                            {transaction.category}
                        </span>

                        <span
                            className={`
                                px-3 py-1 rounded-full text-xs
                                ${
                                    transaction.type === "income"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }
                            `}
                        >
                            {transaction.type}
                        </span>

                    </div>

                </div>

                <div className="text-right">

                    <h2
                        className={`
                            text-xl
                            font-bold
                            ${
                                transaction.type === "income"
                                    ? "text-green-600"
                                    : "text-red-500"
                            }
                        `}
                    >
                        {formatCurrency(transaction.amount)}
                    </h2>

                    <div className="flex justify-end gap-3 mt-3">

                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            className="
                                p-2
                                rounded-lg
                                bg-blue-50
                                text-blue-600
                                hover:bg-blue-100
                            "
                        >
                            <FaEdit />
                        </button>

                        <button
                            onClick={handleDelete}
                            className="
                                p-2
                                rounded-lg
                                bg-red-50
                                text-red-500
                                hover:bg-red-100
                            "
                        >
                            <FaRegTrashAlt />
                        </button>

                    </div>

                </div>

            </div>

            <Modal isOpen={isEditModalOpen}>
                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-xl font-bold">
                        Edit Transaction
                    </h2>

                    <button
                        onClick={() => setIsEditModalOpen(false)}
                        className="text-red-500 text-lg"
                    >
                        ✕
                    </button>

                </div>

                <EditTransactionForm
                    transaction={transaction}
                    wallets={wallets}
                    onSubmit={handleEdit}
                />
            </Modal>
        </div>
    );
};

export default TransactionCard;