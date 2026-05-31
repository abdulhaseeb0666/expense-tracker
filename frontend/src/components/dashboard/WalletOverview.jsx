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

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

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

            </div>

        </div>
    );
};

export default WalletOverview;