import { useEffect, useState } from "react";
import {
    createWallet,
    deleteWallet,
    getWallets,
    updateWallet
} from "../services/walletService";

const useWallets = () => {

    const [wallets, setWallets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWallets = async () => {
        try {
            setLoading(true);

            const data = await getWallets();

            setWallets(data.wallets);

        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const addWallet = async (walletData) => {
        const data = await createWallet(walletData);

        setWallets((prev) => [
            data.wallet,
            ...prev
        ]);

        return data;
    };

    const editWallet = async (id, walletData) => {
        const data = await updateWallet(id, walletData);

        setWallets((prev) =>
            prev.map((wallet) =>
                wallet._id === id
                    ? data.wallet
                    : wallet
            )
        );

        return data;
    };

    const removeWallet = async (id) => {
        await deleteWallet(id);

        setWallets((prev) =>
            prev.filter((wallet) => wallet._id !== id)
        );
    };

    useEffect(() => {
        fetchWallets();
    }, []);

    return {
        wallets,
        loading,
        error,
        fetchWallets,
        addWallet,
        editWallet,
        removeWallet
    };
};

export default useWallets;