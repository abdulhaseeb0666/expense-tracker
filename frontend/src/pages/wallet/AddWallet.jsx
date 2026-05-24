import DashboardLayout from "../../layouts/DashboardLayout";
import WalletForm from "../../components/wallet/WalletForm";

const AddWallet = () => {
    const handleSubmit = (data) => {
        console.log("Wallet:", data);
    };

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Add Wallet</h1>
            <WalletForm onSubmit={handleSubmit} />
        </DashboardLayout>
    );
};

export default AddWallet;