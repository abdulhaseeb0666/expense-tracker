import { useEffect, useState } from "react";
import {
    getSummary,
    getMonthlyStats,
    getCategoryStats,
    getWalletStats
} from "../services/analyticsService";

const useAnalytics = () => {

    const [summary, setSummary] = useState(null);
    const [monthlyStats, setMonthlyStats] = useState([]);
    const [categoryStats, setCategoryStats] = useState([]);
    const [walletStats, setWalletStats] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAnalytics = async () => {
        try {
            setLoading(true);

            const [
                summaryData,
                monthlyData,
                categoryData,
                walletData
            ] = await Promise.all([
                getSummary(),
                getMonthlyStats(),
                getCategoryStats(),
                getWalletStats()
            ]);

            setSummary(summaryData.data);
            setMonthlyStats(monthlyData.data);
            setCategoryStats(categoryData.data);
            setWalletStats(walletData.data);

        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, []);

    return {
        summary,
        monthlyStats,
        categoryStats,
        walletStats,
        loading,
        error,
        fetchAnalytics
    };
};

export default useAnalytics;