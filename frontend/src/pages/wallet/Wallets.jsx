import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import WalletList from "../../components/wallet/WalletList";
import WalletForm from "../../components/wallet/WalletForm";
import Loader from "../../components/common/Loader";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";

import useWallets from "../../hooks/useWallet";

const Wallets = () => {

    const {
        wallets,
        loading,
        error,
        addWallet,
        removeWallet
    } = useWallets();

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleCreateWallet = async (formData) => {

        try {

            await addWallet({
                name: formData.name,
                balance: Number(formData.balance)
            });

            toast.success("Wallet created successfully");

            setOpenModal(false);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Failed to create wallet"
            );
        }
    };

    return (
        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Wallets
                </h1>

                <Button onClick={() => setOpenModal(true)}>
                    Add Wallet
                </Button>

            </div>

            {loading ? (
                <Loader />
            ) : wallets.length > 0 ? (
                <WalletList wallets={wallets} onDelete={removeWallet} />
            ) : (
                <div className="bg-white p-6 rounded shadow text-center">
                    <p className="text-gray-500">
                        No wallets found
                    </p>
                </div>
            )}

            <Modal isOpen={openModal}>

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-xl font-bold">
                        Create Wallet
                    </h2>

                    <button
                        onClick={() => setOpenModal(false)}
                        className="text-red-500 text-lg"
                    >
                        ✕
                    </button>

                </div>

                <WalletForm onSubmit={handleCreateWallet} />

            </Modal>

        </DashboardLayout>
    );
};

export default Wallets;