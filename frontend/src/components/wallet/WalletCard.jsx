import formatCurrency from "../../utils/formatCurrency";
import { FaWallet, FaRegTrashAlt  } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const WalletCard = ({ wallet, onDelete }) => {

    const { user } = useAuth();

    const handleDelete = () => {

        const confirmDelete = window.confirm(
            `Delete "${wallet.name}" wallet?`
        );

        if (confirmDelete) {
            onDelete(wallet._id);
        }
    };

    return (
        <div
            className="
                bg-white
                border
                border-[#D9E8E3]
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
            "
        >

            <div className="flex justify-between items-start">

                <div>

                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-[#EAF4F1]
                            flex
                            items-center
                            justify-center
                            mb-4
                        "
                    >
                        <FaWallet
                            size={24}
                            className="text-[#2F6B5F]"
                        />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800">
                        {wallet.name}
                    </h3>

                    <p className="text-slate-500 mt-1">
                        Current Balance
                    </p>

                </div>

                <button
                    onClick={handleDelete}
                    className="
                        p-2
                        rounded-xl
                        bg-red-50
                        text-red-500
                        hover:bg-red-100
                        transition
                    "
                >
                    <FaRegTrashAlt size={18} />
                </button>

            </div>

            <div className="mt-6">

                <h2
                    className="
                        text-3xl
                        font-bold
                        text-[#2F6B5F]
                    "
                >
                    {formatCurrency(
                        wallet.balance,
                        user?.currency
                    )}
                </h2>

            </div>

        </div>
    );
};

export default WalletCard;