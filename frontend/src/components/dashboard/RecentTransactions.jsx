import formatCurrency from "../../utils/formatCurrency";
import {
    FaArrowTrendUp,
    FaArrowTrendDown
} from "react-icons/fa6";

const RecentTransactions = ({ transactions = [] }) => {

    return (
        <div className="
            bg-white/90
            backdrop-blur-sm
            rounded-3xl
            border border-emerald-100
            shadow-lg
            overflow-hidden
        ">

            {/* Header */}
            <div className="
                px-6 py-5
                border-b border-emerald-100
                flex justify-between items-center
            ">
                <div>
                    <h2 className="
                        text-xl font-bold
                        text-slate-800
                    ">
                        Recent Transactions
                    </h2>

                    <p className="
                        text-sm
                        text-slate-500
                    ">
                        Your latest financial activity
                    </p>
                </div>

                <div className="
                    bg-emerald-50
                    text-emerald-700
                    px-3 py-1
                    rounded-full
                    text-sm font-medium
                ">
                    {transactions.length} Records
                </div>
            </div>

            {/* Empty State */}
            {transactions.length === 0 ? (
                <div className="py-12 text-center">
                    <p className="text-slate-500">
                        No transactions found
                    </p>
                </div>
            ) : (
                <div className="divide-y divide-emerald-50">

                    {transactions.slice(0, 5).map((transaction) => (

                        <div
                            key={transaction._id}
                            className="
                                px-6 py-4
                                flex justify-between items-center
                                hover:bg-emerald-50/50
                                transition-all
                            "
                        >

                            {/* Left Side */}
                            <div className="flex items-center gap-4">

                                <div
                                    className={`
                                        w-12 h-12
                                        rounded-2xl
                                        flex items-center justify-center
                                        ${
                                            transaction.type === "income"
                                                ? "bg-emerald-100 text-emerald-600"
                                                : "bg-red-100 text-red-500"
                                        }
                                    `}
                                >
                                    {transaction.type === "income" ? (
                                        <FaArrowTrendUp size={18} />
                                    ) : (
                                        <FaArrowTrendDown size={18} />
                                    )}
                                </div>

                                <div>
                                    <h3 className="
                                        font-semibold
                                        text-slate-800
                                    ">
                                        {transaction.title}
                                    </h3>

                                    <p className="
                                        text-sm
                                        text-slate-500
                                    ">
                                        {transaction.category}
                                    </p>
                                </div>

                            </div>

                            {/* Right Side */}
                            <div className="text-right">

                                <p
                                    className={`
                                        text-lg font-bold
                                        ${
                                            transaction.type === "income"
                                                ? "text-emerald-600"
                                                : "text-red-500"
                                        }
                                    `}
                                >
                                    {transaction.type === "income"
                                        ? "+"
                                        : "-"}
                                    {formatCurrency(transaction.amount)}
                                </p>

                                <span
                                    className={`
                                        text-xs
                                        px-3 py-1
                                        rounded-full
                                        font-medium
                                        ${
                                            transaction.type === "income"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-red-100 text-red-600"
                                        }
                                    `}
                                >
                                    {transaction.type}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>
            )}

        </div>
    );
};

export default RecentTransactions;