import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    
    
    const navigate = useNavigate();
    const { login } = useAuth();
    
    if (localStorage.getItem("token")) {
        
        toast.info("You are already logged in");
        
        setTimeout(() => {
            navigate("/dashboard");
        } , 1000)
        
        return null;
    }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData);

            toast.success("Login successful");
            navigate("/dashboard");

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-white to-emerald-50 px-4">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-green-100 shadow-xl rounded-2xl p-8"
            >

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Sign in to continue managing your finances
                    </p>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-1 block">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="text-sm text-gray-600 mb-1 block">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none transition"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium p-3 rounded-lg transition shadow-md"
                >
                    Login
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-5">
                    Don’t have an account?
                    <span className="text-emerald-600 font-medium cursor-pointer ml-1 hover:underline">
                        Register
                    </span>
                </p>

            </form>

        </div>
    );
};

export default Login;