import formatCurrency from "../../utils/formatCurrency";
import { FaRegTrashAlt } from "react-icons/fa";

const WalletCard = ({ wallet, onDelete }) => {

    const handleDelete = () => {

        const confirmDelete = window.confirm(
            `Delete "${wallet.name}" wallet?`
        );

        if (confirmDelete) {
            onDelete(wallet._id);
        }
    };

    return (
        <div className="p-4 border rounded shadow flex justify-between items-center">

            <div>

                <h3 className="font-bold">
                    {wallet.name}
                </h3>

                <p className="text-sm text-gray-500">
                    Balance
                </p>

                <h2 className="text-xl">
                    {formatCurrency(wallet.balance)}
                </h2>

            </div>

            <div>

                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700"
                >
                    <FaRegTrashAlt size={25} />
                </button>

            </div>

        </div>
    );
};

export default WalletCard;