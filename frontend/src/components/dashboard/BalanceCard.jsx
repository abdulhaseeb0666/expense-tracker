import formatCurrency from "../../utils/formatCurrency";

const BalanceCard = ({ balance }) => {
    return (
        <div className="p-4 bg-white shadow rounded">
            <h3 className="text-gray-500">Current Balance</h3>
            <h1 className="text-2xl font-bold">
                {formatCurrency(balance)}
            </h1>
        </div>
    );
};

export default BalanceCard;