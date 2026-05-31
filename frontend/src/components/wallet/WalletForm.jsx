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
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            <div>

                <label
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-600
                        mb-2
                    "
                >
                    Wallet Name
                </label>

                <input
                    name="name"
                    placeholder="e.g. JazzCash, HBL, Cash"
                    onChange={handleChange}
                    className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-[#D9E8E3]
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#5E9C89]
                    "
                />

            </div>

            <button
                className="
                    w-full
                    py-3
                    rounded-xl
                    bg-[#2F6B5F]
                    hover:bg-[#24564C]
                    text-white
                    font-semibold
                    transition
                "
            >
                Create Wallet
            </button>

        </form>
    );
};

export default WalletForm;