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
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
    "#f97316",
    "#14b8a6"
];

const CategoryOverview = ({ data = [] }) => {

    const chartData = data.map((item) => ({
        category: item._id,
        amount: item.total
    }));

    return (
        <div className="bg-white p-5 rounded shadow">

            <div className="mb-4">

                <h2 className="text-xl font-bold">
                    Category Overview
                </h2>

                <p className="text-sm text-gray-500">
                    Expense distribution by category
                </p>

            </div>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={chartData}
                            dataKey="amount"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
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
                            formatter={(value) =>
                                formatCurrency(value)
                            }
                        />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default CategoryOverview;