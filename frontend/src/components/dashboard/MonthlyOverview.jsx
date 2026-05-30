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
        <div className="bg-white p-5 rounded shadow">

            <div className="mb-4">

                <h2 className="text-xl font-bold">
                    Monthly Overview
                </h2>

                <p className="text-sm text-gray-500">
                    Monthly income and expense analytics
                </p>

            </div>

            <div className="h-80">

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

                        <CartesianGrid strokeDasharray="2 3" />

                        <XAxis dataKey="month" />

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
                            radius={[6, 6, 0, 0]}
                            fill="#1eb2a6"
                        />

                        <Bar
                            dataKey="expense"
                            name="Expense"
                            radius={[6, 6, 0, 0]}
                            fill="#f87171"
                        />

                        <Bar
                            dataKey="profit"
                            name="Profit"
                            radius={[6, 6, 0, 0]}
                            fill="#fbbf24"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default MonthlyOverview;