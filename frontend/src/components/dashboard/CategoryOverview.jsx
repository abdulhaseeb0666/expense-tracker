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
        <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6 hover:shadow-xl transition-all">

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-900">
                    Spending Categories
                </h2>

                <p className="text-green-600 text-sm">
                    Breakdown of expenses by category
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
                            innerRadius={70}
                            outerRadius={120}
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

        </div>
    );
};

export default CategoryOverview;