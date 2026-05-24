import formatCurrency from "../../utils/formatCurrency";

const WalletCard = ({ wallet }) => {
    return (
        <div className="p-4 border rounded shadow">
            <h3 className="font-bold">{wallet.name}</h3>

            <p className="text-sm text-gray-500">
                Balance
            </p>

            <h2 className="text-xl">
                {formatCurrency(wallet.balance)}
            </h2>
        </div>
    );
};

export default WalletCard;