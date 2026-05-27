import formatCurrency from "../../utils/formatCurrency";
import { FaRegTrashAlt } from "react-icons/fa";
import useTransactions from "../../hooks/useTransactions";

const TransactionCard = ({ transaction }) => {

    const { removeTransaction } = useTransactions();

    const handleDelete = () => {

        const confirmDelete = window.confirm(
            `Delete "${transaction.title}" transaction?`
        );

        if (confirmDelete) {
            removeTransaction(transaction._id);
            
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

                <div>

                    <button
                        onClick={handleDelete}
                        className="text-red-500 hover:text-red-700"
                    >
                        <FaRegTrashAlt size={25} />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TransactionCard;