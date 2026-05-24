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
        <form onSubmit={handleSubmit} className="space-y-3">
            {type === "register" && (
                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
            )}

            <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <button className="bg-black text-white p-2 w-full">
                {type === "login" ? "Login" : "Register"}
            </button>
        </form>
    );
};

export default AuthForm;