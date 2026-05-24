import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
    const [loading, setLoading] = useState(false);

    const handleRegister = async (data) => {
        setLoading(true);
        console.log("Register data:", data);
        setLoading(false);
    };

    return (
        <AuthLayout>
            <AuthHeader title="Register" subtitle="Create your account" />
            <AuthForm type="register" onSubmit={handleRegister} />
            {loading && <p className="text-center">Loading...</p>}
        </AuthLayout>
    );
};

export default Register;