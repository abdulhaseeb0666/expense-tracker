// src/components/dashboard/IncomeChart.jsx

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

import formatCurrency from "../../utils/formatCurrency";

const IncomeChart = ({ data = [] }) => {

    console.log("IncomeChart received data:", data);

    console.log("IncomeChart data:", data);

    const chartData = data.map((item) => (
        item._id.type === "income" ? {
            month: item._id.month,
            income: item.total || 0
        } : {
            month: item._id.month,
            expense: item.total || 0
        }
    ));

    console.log(chartData);

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

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={chartData}>

                        <CartesianGrid strokeDasharray="2 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip
                            formatter={(value) =>
                                formatCurrency(value)
                            }
                        />

                        <Legend />

                        <Bar
                            dataKey="income"
                            radius={[6, 6, 0, 0]}
                            fill="#1eb2a6"
                        />

                        <Bar
                            dataKey="expense"
                            radius={[6, 6, 0, 0]}
                            fill="#f87171"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default IncomeChart;