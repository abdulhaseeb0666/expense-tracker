import WalletCard from "./WalletCard";

const WalletList = ({ wallets = [] , onDelete}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {wallets.map((w) => (
                <WalletCard key={w._id} wallet={w} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default WalletList;