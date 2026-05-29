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

const MonthlyOverview = ({ data = [] }) => {

    const chartData = data.map((item) => (
        item._id.type === "income" ? {
            month: item._id.month,
            income: item.total || 0  
        } : {
            month: item._id.month,
            expense: item.total || 0
        }
    ));
    
    const uniqueMonths = [...new Set(chartData.map(item => item.month))];
    
    uniqueMonths.forEach((month) => {
        let balance = 0;
        chartData.forEach((item) => {
            if (item.month === month) {
                balance += item.income || 0;
                balance -= item.expense || 0;
            }
        });
        chartData.push({
            month: month,
            profit: balance
        })
    });  

    console.log("Data: " , data);
    console.log("Chart Data: " , chartData);
    console.log("Unique Months: " , uniqueMonths);
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

                        <CartesianGrid strokeDasharray="2 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Legend />

                        <Tooltip formatter={(value) => formatCurrency(value)} />
                            
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

                        <Bar
                            dataKey="profit"
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