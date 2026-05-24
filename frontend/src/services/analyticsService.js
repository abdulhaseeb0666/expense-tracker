import api from "../api/axios";

export const getSummary = async () => {
    const response = await api.get("/analytics/summary");
    return response.data;
};

export const getMonthlyStats = async () => {
    const response = await api.get("/analytics/monthly");
    return response.data;
};

export const getCategoryStats = async () => {
    const response = await api.get("/analytics/categories");
    return response.data;
};

export const getWalletStats = async () => {
    const response = await api.get("/analytics/wallets");
    return response.data;
};