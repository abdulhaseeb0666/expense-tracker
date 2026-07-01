import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ type = "login", onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            {type === "register" && (

                <input
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-sm
                        sm:text-base
                        outline-none
                        transition
                        focus:ring-2
                        focus:ring-emerald-500
                        focus:border-emerald-500
                    "
                />

            )}

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    text-sm
                    sm:text-base
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-emerald-500
                    focus:border-emerald-500
                "
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    text-sm
                    sm:text-base
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-emerald-500
                    focus:border-emerald-500
                "
            />

            {type === "register" && (

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        px-4
                        py-3
                        text-sm
                        sm:text-base
                        outline-none
                        transition
                        focus:ring-2
                        focus:ring-emerald-500
                        focus:border-emerald-500
                    "
                />

            )}

            <button
                className="
                    w-full
                    rounded-xl
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    py-3
                    font-semibold
                    shadow-lg
                    transition
                    text-sm
                    sm:text-base
                "
            >
                {type === "login"
                    ? "Sign In"
                    : "Create Account"}
            </button>

            <div className="relative">

                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>

                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-gray-400">
                        OR
                    </span>
                </div>

            </div>

            <button
                type="button"
                onClick={() => {
                    window.location.href =
                        "https://expense-tracker-p3ec.onrender.com/api/auth/google";
                }}
                className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    py-3
                    bg-white
                    hover:bg-gray-50
                    flex
                    justify-center
                    items-center
                    gap-3
                    transition
                    shadow-sm
                "
            >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5"
                >
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.215 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.277 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.277 4 24 4c-7.682 0-14.318 4.337-17.694 10.691z"/>
                    <path fill="#4CAF50" d="M24 44c5.177 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.146 35.091 26.677 36 24 36c-5.194 0-9.625-3.328-11.283-7.946l-6.522 5.025C9.537 39.556 16.227 44 24 44z"/>
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.084 5.57l6.19 5.238C36.971 38.205 44 33 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>

                <span className="font-medium text-sm sm:text-base">
                    Continue with Google
                </span>

            </button>

            <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                Your financial information is encrypted and securely stored.
            </p>

            <div className="text-center text-sm">

                {type === "login" ? (

                    <>
                        Don't have an account?
                        <Link
                            to="/register"
                            className="text-emerald-600 font-semibold ml-2 hover:underline"
                        >
                            Register
                        </Link>
                    </>

                ) : (

                    <>
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-emerald-600 font-semibold ml-2 hover:underline"
                        >
                            Login
                        </Link>
                    </>

                )}

            </div>

        </form>

    );
};

export default AuthForm;