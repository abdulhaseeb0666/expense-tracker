import formatCurrency from "../../utils/formatCurrency";

const TransactionCard = ({ transaction }) => {
    return (
        <div className="p-3 border rounded flex justify-between">
            <div>
                <h3>{transaction.title}</h3>
                <p className="text-sm text-gray-500">
                    {transaction.category}
                </p>
            </div>

            <div className={transaction.type === "income" ? "text-green-500" : "text-red-500"}>
                {formatCurrency(transaction.amount)}
            </div>
        </div>
    );
};

export default TransactionCard;