import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import WalletForm from "../../components/wallet/WalletForm";

import useWallets from "../../hooks/useWallet";

const AddWallet = () => {
    const navigate = useNavigate();
    const { addWallet } = useWallets();
    
    const handleSubmit = async (formData) => {
        try {
            await addWallet({
                name: formData.name,
                balance: Number(formData.balance)
            });
            toast.success("Wallet created successfully");
            navigate("/wallets");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to create wallet"
            );
        }
    };

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Add Wallet</h1>
            <WalletForm onSubmit={handleSubmit} />
        </DashboardLayout>
    );
};

export default AddWallet;