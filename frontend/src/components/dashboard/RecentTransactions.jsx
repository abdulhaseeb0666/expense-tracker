import formatCurrency from "../../utils/formatCurrency";

const RecentTransactions = ({ transactions = [] }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-3">Recent Transactions</h2>

            {transactions.slice(0, 5).map((t) => (
                <div key={t._id} className="flex justify-between py-2 border-b">
                    <span>{t.title}</span>
                    <span className={t.type === "income" ? "text-green-500" : "text-red-500"}>
                        {formatCurrency(t.amount)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default RecentTransactions;