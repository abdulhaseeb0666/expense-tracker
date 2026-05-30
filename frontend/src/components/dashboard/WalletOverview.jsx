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

const COLORS = [
    "#7dd3fc", // light blue
    "#86efac", // light green
    "#ef9a9a", // light red
    "#fda4c0", // light pink
    "#c4b5fd", // light purple
    "#fcd34d", // light yellow
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
        <div className="bg-white p-5 rounded shadow">

            <div className="mb-4">
                <h2 className="text-xl font-bold">
                    Wallet Overview
                </h2>

                <p className="text-sm text-gray-500">
                    Income, expense and balance for each wallet
                </p>
            </div>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={chartData}>

                        {chartData.map((wallet, index) => (
                            <ReferenceArea
                                key={wallet.wallet}
                                x1={wallet.wallet}
                                x2={wallet.wallet}
                                fill={COLORS[index % COLORS.length]}
                                fillOpacity={0.3}
                            />
                        ))}

                        <CartesianGrid strokeDasharray="2 3" />

                        <XAxis dataKey="wallet" />

                        <YAxis />

                        <Legend />

                        <Tooltip
                            formatter={(value) =>
                                formatCurrency(value)
                            }
                        />

                        <Bar
                            dataKey="income"
                            name="Income"
                            fill="#10b981"
                            radius={[6, 6, 0, 0]}
                        />

                        <Bar
                            dataKey="expense"
                            name="Expense"
                            fill="#ef4444"
                            radius={[6, 6, 0, 0]}
                        />

                        <Bar
                            dataKey="balance"
                            name="Balance"
                            fill="#f59e0b"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default WalletOverview;