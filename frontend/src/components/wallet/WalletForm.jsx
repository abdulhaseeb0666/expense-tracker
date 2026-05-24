import { useState } from "react";

const WalletForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        balance: 0
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
            <input
                name="name"
                placeholder="Wallet Name"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                name="balance"
                placeholder="Initial Balance"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <button className="bg-black text-white p-2 w-full">
                Create Wallet
            </button>
        </form>
    );
};

export default WalletForm;