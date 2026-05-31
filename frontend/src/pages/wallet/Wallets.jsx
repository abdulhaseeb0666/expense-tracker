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

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-4xl font-bold text-[#2F6B5F]">
                        My Wallets
                    </h1>

                    <p className="text-slate-500 mt-1">
                        Manage your accounts and track balances
                    </p>

                </div>

                <Button onClick={() => setOpenModal(true)}>
                    + Add Wallet
                </Button>

            </div>

            {loading ? (
                <Loader />
            ) : wallets.length > 0 ? (
                <WalletList wallets={wallets} onDelete={removeWallet} />
            ) : (
                <div
                    className="
                        bg-white
                        border
                        border-[#D9E8E3]
                        rounded-3xl
                        p-12
                        text-center
                        shadow-sm
                    "
                >
                    <div className="text-6xl mb-4">
                        💳
                    </div>

                    <h3 className="text-xl font-semibold text-slate-700">
                        No Wallets Yet
                    </h3>

                    <p className="text-slate-500 mt-2">
                        Create your first wallet to start managing your finances.
                    </p>
                </div>
            )}

            <Modal isOpen={openModal}>

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h2 className="text-2xl font-bold text-[#2F6B5F]">
                            Create Wallet
                        </h2>

                        <p className="text-slate-500 text-sm">
                            Add a new wallet to manage your money
                        </p>

                    </div>

                    <button
                        onClick={() => setOpenModal(false)}
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-red-50
                            text-red-500
                            hover:bg-red-100
                        "
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