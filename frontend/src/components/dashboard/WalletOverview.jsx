import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    ReferenceArea
} from "recharts";

const WALLET_COLORS = [
    "#D6F5E3",
    "#E0F2FE",
    "#FEF3C7",
    "#FCE7F3",
    "#EDE9FE",
    "#DCFCE7"
];

import formatCurrency from "../../utils/formatCurrency";

const WalletOverview = ({ data = [] }) => {

    const chartData = data.map((wallet) => ({
        wallet: wallet.walletName,
        income: wallet.income || 0,
        expense: wallet.expense || 0,
        balance: (wallet.income || 0) - (wallet.expense || 0)
    }));

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6">

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-900">
                    Wallet Performance
                </h2>

                <p className="text-green-600">
                    Compare balances across wallets
                </p>
            </div>

           {
                chartData.length > 0 ? (

                    <ResponsiveContainer width="100%" height="80%">

                        <BarChart data={chartData}>

                            {chartData.map((wallet, index) => (
                                <ReferenceArea
                                    key={wallet.wallet}
                                    x1={wallet.wallet}
                                    x2={wallet.wallet}
                                    fill={
                                        WALLET_COLORS[
                                            index % WALLET_COLORS.length
                                        ]
                                    }
                                    fillOpacity={0.7}
                                />
                            ))}

                            <CartesianGrid strokeDasharray="2 3" />

                            <XAxis dataKey="wallet" />

                            <YAxis />

                            <Legend />

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "16px",
                                    border: "none",
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 8px 25px rgba(0,0,0,.15)"
                                }}
                                formatter={(value) => formatCurrency(value)}
                            />

                            <Bar
                                dataKey="income"
                                fill="#38A169"
                                radius={[10,10,0,0]}
                            />

                            <Bar
                                dataKey="expense"
                                fill="#E53E3E"
                                radius={[10,10,0,0]}
                            />

                            <Bar
                                dataKey="balance"
                                fill="#D69E2E"
                                radius={[10,10,0,0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                ) : (

                    <div className="flex flex-col items-center justify-center h-fit">

                        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 text-emerald-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 9V7a5 5 0 00-10 0v2M5 9h14v10H5V9z"
                                />
                            </svg>

                        </div>

                        <h3 className="text-xl font-semibold text-gray-800">
                            No Wallet Data
                        </h3>

                        <p className="text-gray-500 text-center mt-2 max-w-xs">
                            No wallet transactions are available yet.
                            Create a wallet and add transactions to view wallet performance analytics.
                        </p>
                    </div>

                )
            }

        </div>
    );
};

export default WalletOverview;