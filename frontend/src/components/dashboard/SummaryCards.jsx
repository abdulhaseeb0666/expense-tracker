import formatCurrency from "../../utils/formatCurrency";

const SummaryCards = ({ data }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-green-100 rounded">
                Income: {formatCurrency(data?.income)}
            </div>

            <div className="p-4 bg-red-100 rounded">
                Expense: {formatCurrency(data?.expense)}
            </div>

            <div className="p-4 bg-blue-100 rounded">
                Balance: {formatCurrency(data?.balance)}
            </div>
        </div>
    );
};

export default SummaryCards;