import DashboardLayout from "../../layouts/DashboardLayout";
import WalletList from "../../components/wallet/WalletList";

const Wallets = () => {
    const wallets = [];

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Wallets</h1>
            <WalletList wallets={wallets} />
        </DashboardLayout>
    );
};

export default Wallets;