import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import formatCurrency from "../../utils/formatCurrency";

const SummaryCards = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Income */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-sm">Income</p>

                    <div className="bg-emerald-100 p-2 rounded-lg">
                        <FaArrowUp className="text-emerald-600 text-sm" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-emerald-600 mt-3">
                    {formatCurrency(data?.income || 0)}
                </h3>

            </div>

            {/* Expense */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-sm">Expense</p>

                    <div className="bg-red-100 p-2 rounded-lg">
                        <FaArrowDown className="text-red-500 text-sm" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-red-500 mt-3">
                    {formatCurrency(data?.expense || 0)}
                </h3>

            </div>

            {/* Balance */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-sm">Balance</p>

                    <div className="bg-blue-100 p-2 rounded-lg">
                        <FaWallet className="text-blue-600 text-sm" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mt-3">
                    {formatCurrency(data?.balance || 0)}
                </h3>

            </div>

        </div>
    );
};

export default SummaryCards;