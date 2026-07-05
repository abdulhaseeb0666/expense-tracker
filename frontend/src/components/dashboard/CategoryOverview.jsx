// src/components/dashboard/CategoryOverview.jsx

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

import formatCurrency from "../../utils/formatCurrency";

const COLORS = [
    "#7dd3fc", // light blue
    "#86efac", // light green
    "#ef9a9a", // light red
    "#fda4c0", // light pink
    "#c4b5fd", // light purple
    "#fcd34d", // light yellow
];

const CategoryOverview = ({ data = [] }) => {

    const chartData = data.map((item) => ({
        category: item._id,
        amount: item.total
    }));

    return (
        <div className="bg-white rounded-2xl shadow p-6 min-h-107.5 flex flex-col border border-green-100 hover:shadow-xl transition-all">

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-900">
                    Spending Categories
                </h2>

                <p className="text-green-600 text-sm">
                    Breakdown of expenses by category
                </p>
            </div>

            {
                chartData.length > 0 ? (

                    <div className="flex-1 min-h-80">
                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={chartData}
                                dataKey="amount"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={3}
                                label={({ category, percent }) =>
                                    `${category} (${(percent * 100).toFixed(0)}%)`
                                }
                            >

                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={entry.category}
                                        fill={
                                            COLORS[
                                                index % COLORS.length
                                            ]
                                        }
                                    />
                                ))}

                            </Pie>

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "16px",
                                    border: "none",
                                    boxShadow: "0 8px 30px rgba(0,0,0,.1)"
                                }}
                                formatter={(value) => formatCurrency(value)}
                            />

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>
                    </div>
                ) 
                : (

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
                                    d="M11 3v18m0 0a8 8 0 100-16 8 8 0 000 16zm0 0V3"
                                />
                            </svg>

                        </div>

                        <h3 className="text-xl font-semibold text-gray-800">
                            No Category Data
                        </h3>

                        <p className="text-gray-500 text-center mt-2 max-w-xs">
                            No expenses have been categorized yet.
                            Add transactions to see spending distribution across categories.
                        </p>

                    </div>

                )
            }

        </div>
    );
};

export default CategoryOverview;