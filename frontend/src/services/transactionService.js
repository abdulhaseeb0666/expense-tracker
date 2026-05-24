import api from "../api/axios";

export const createTransaction = async (transactionData) => {
    const response = await api.post("/transactions", transactionData);
    return response.data;
};

export const getTransactions = async (query = "") => {
    const response = await api.get(`/transactions${query}`);
    return response.data;
};

export const getSingleTransaction = async (id) => {
    const response = await api.get(`/transactions/${id}`);
    return response.data;
};

export const updateTransaction = async (id, transactionData) => {
    const response = await api.put(`/transactions/${id}`, transactionData);
    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = await api.delete(`/transactions/${id}`);
    return response.data;
};

export const getTransactionStats = async () => {
    const response = await api.get("/transactions/stats");
    return response.data;
};