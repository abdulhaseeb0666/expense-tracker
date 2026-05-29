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
        <div className="p-3 border rounded flex justify-between">
            <div>
                <h3>{transaction.title}</h3>
                <p className="text-sm text-gray-500">
                    {transaction.category}
                </p>
            </div>

            <div className={`${transaction.type === "income" ? "text-green-500" : "text-red-500"} font-bold flex items-center gap-3`}>
                {formatCurrency(transaction.amount)}

                <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="text-blue-500 hover:text-blue-700"
                >
                    <FaEdit />
                </button>

                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700"
                >
                    <FaRegTrashAlt size={25} />
                </button>

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