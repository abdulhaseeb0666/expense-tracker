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
    "#D6F5E3",
    "#E0F2FE",
    "#FEF3C7",
    "#FCE7F3",
    "#EDE9FE",
    "#DCFCE7"
];

import formatCurrency from "../../utils/formatCurrency";

const MonthlyOverview = ({ data = [] }) => {

    const monthlyMap = {};

    data.forEach((item) => {
        const month = item._id.month;

        if (!monthlyMap[month]) {
            monthlyMap[month] = {
                month,
                income: 0,
                expense: 0,
                profit: 0
            };
        }

        if (item._id.type === "income") {
            monthlyMap[month].income = item.total;
        } else {
            monthlyMap[month].expense = item.total;
        }

        monthlyMap[month].profit =
            monthlyMap[month].income -
            monthlyMap[month].expense;
    });

    const chartData = Object.values(monthlyMap);


    return (
        <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6">

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-900">
                    Monthly Financial Flow
                </h2>

                <p className="text-green-600">
                    Income, expenses and profit trends
                </p>
            </div>

            <div className="h-80">

                {
                    data.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%" >

                            <BarChart data={chartData}>
                
                                {chartData.map((month, index) => (
                                    <ReferenceArea
                                        key={month.month}
                                        x1={month.month}
                                        x2={month.month}
                                        fill={COLORS[index % COLORS.length]}
                                        fillOpacity={0.3}
                                    />
                                ))}

                                <CartesianGrid strokeDasharray="5 5" stroke="#E5F4EA" />

                                <XAxis dataKey="month" tick={{ fill: "#2F855A" }} />

                                <YAxis  tick={{ fill: "#2F855A" }} />

                                <Legend
                                    wrapperStyle={{
                                        paddingTop: 15
                                    }}
                                />

                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#fff",
                                        borderRadius: "16px",
                                        border: "none",
                                        boxShadow: "0 8px 30px rgba(0,0,0,.1)"
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
                                    dataKey="profit"
                                    fill="#D69E2E"
                                    radius={[10,10,0,0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-fit">
                            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
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
                                        d="M9 17v-6m3 6V7m3 10v-3m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800">
                                No Analytics Data
                            </h3>

                            <p className="text-gray-500 text-center mt-2 max-w-xs">
                                There are no transactions available.
                                Add some income or expense records to see visual insights.
                            </p>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default MonthlyOverview;