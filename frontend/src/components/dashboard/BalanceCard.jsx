import { FaWallet } from "react-icons/fa";
import formatCurrency from "../../utils/formatCurrency";

const BalanceCard = ({ balance }) => {
    return (
        <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>

            {/* Header */}
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-slate-500 text-sm font-medium">
                        Current Balance
                    </p>

                    <h2 className="text-3xl font-bold text-slate-800 mt-1">
                        {formatCurrency(balance)}
                    </h2>
                </div>

                {/* Icon */}
                <div className="bg-emerald-100 p-3 rounded-xl">
                    <FaWallet className="text-emerald-600 text-xl" />
                </div>

            </div>

            {/* Bottom hint */}
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Updated in real time from your wallets
            </div>

        </div>
    );
};

export default BalanceCard;