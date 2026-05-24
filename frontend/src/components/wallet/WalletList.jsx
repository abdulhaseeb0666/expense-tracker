import WalletCard from "./WalletCard";

const WalletList = ({ wallets = [] }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {wallets.map((w) => (
                <WalletCard key={w._id} wallet={w} />
            ))}
        </div>
    );
};

export default WalletList;