import api from "../api/axios";

export const registerUser = async (userData) => {
    try {
        const response = await api.post("/auth/register-email", userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const loginUser = async (userData) => {
    const response = await api.post("/auth/login", userData);
    return response.data;
};

export const logoutUser = async () => {
    const response = await api.post("/auth/logout");
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};