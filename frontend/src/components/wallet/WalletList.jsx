import WalletCard from "./WalletCard";

const WalletList = ({ wallets = [] , onDelete}) => {
    return (
        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
            "
        >

            {wallets.map((wallet) => (

                <WalletCard
                    key={wallet._id}
                    wallet={wallet}
                    onDelete={onDelete}
                />

            ))}

        </div>
    );
};

export default WalletList;