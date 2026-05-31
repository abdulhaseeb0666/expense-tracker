import { useState } from "react";

const AuthForm = ({ type = "login", onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {type === "register" && (
                <div>
                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
            )}

            <div>
                <input
                    name="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <button
                className="w-full py-3 rounded-lg bg-green-600 text-white font-medium
                           hover:bg-green-700 transition shadow-md hover:shadow-lg"
            >
                {type === "login" ? "Sign In" : "Create Account"}
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
                By continuing you agree to secure encrypted storage of your financial data.
            </p>

        </form>
    );
};

export default AuthForm;