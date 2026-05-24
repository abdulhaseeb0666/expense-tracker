import { createContext, useEffect, useState } from "react";
import { getCurrentUser, loginUser, logoutUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadUser = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    setLoading(false);
                    return;
                }

                const data = await getCurrentUser();
                setUser(data.user);

            } catch (error) {
                localStorage.removeItem("token");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();

    }, []);

    const login = async (formData) => {
        const data = await loginUser(formData);

        localStorage.setItem("token", data.token);
        setUser(data.user);

        return data;
    };

    const logout = async () => {
        await logoutUser();

        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};