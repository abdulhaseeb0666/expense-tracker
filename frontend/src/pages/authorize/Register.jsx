import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../services/authService";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (data) => {
        try {
            setLoading(true);
            await registerUser(data);
            navigate("/verify-otp");
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <AuthHeader title="Register" subtitle="Create your account" />
            <AuthForm type="register" onSubmit={handleRegister} />
            {loading && <p className="text-center mt-4 text-sm text-gray-500 bg-gray-100 py-2 rounded shadow">Loading...</p>}
        </AuthLayout>
    );
};

export default Register;