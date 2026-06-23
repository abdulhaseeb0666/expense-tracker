import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
        
    const navigate = useNavigate();
    const { login } = useAuth();

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

                    <button
                        type="button"
                        onClick={() => {
                            window.location.href =
                            "https://expense-tracker-p3ec.onrender.com/api/auth/google";
                        }}
                        className="w-full flex items-center justify-center gap-3 py-3 mt-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            className="w-5 h-5"
                        >
                            <path
                            fill="#FFC107"
                            d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.215 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.277 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                            />
                            <path
                            fill="#FF3D00"
                            d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.277 4 24 4c-7.682 0-14.318 4.337-17.694 10.691z"
                            />
                            <path
                            fill="#4CAF50"
                            d="M24 44c5.177 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.146 35.091 26.677 36 24 36c-5.194 0-9.625-3.328-11.283-7.946l-6.522 5.025C9.537 39.556 16.227 44 24 44z"
                            />
                            <path
                            fill="#1976D2"
                            d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.084 5.57l6.19 5.238C36.971 38.205 44 33 44 24c0-1.341-.138-2.65-.389-3.917z"
                            />
                        </svg>

                        <span>Continue with Google</span>
                    </button>

                    <p>
                    <span className="text-gray-500 text-sm text-center block mt-1">
                        Google will register you as new user if you don’t have an account yet.
                    </span>
                    </p>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-5">
                    Don’t have an account?
                    <span className="text-emerald-600 font-medium cursor-pointer ml-1 hover:underline">
                        <Link to="/register">
                            Register
                        </Link>
                    </span>
                </p>

            </form>

        </div>
    );
};

export default Login;