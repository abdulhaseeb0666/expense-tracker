import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOTP = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        otp: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");

            const { data } = await axios.post(
                "http://localhost:3000/api/auth/verify-email-otp",
                formData
            );

            localStorage.setItem(
                "token",
                data.token
            );

            navigate("/dashboard");

        } catch (err) {
            setError(
                err.response?.data?.message ||
                "OTP verification failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2F6B5F]/10 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-[#2F6B5F]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-18 8h18V8"
                            />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-800">
                        Verify OTP
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Enter the verification code sent to your email.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="
                                w-full
                                px-4
                                py-3
                                border
                                border-slate-300
                                rounded-xl
                                outline-none
                                focus:ring-2
                                focus:ring-[#2F6B5F]
                                focus:border-[#2F6B5F]
                                transition
                            "
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            OTP Code
                        </label>

                        <input
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            required
                            maxLength={6}
                            className="
                                w-full
                                px-4
                                py-3
                                border
                                border-slate-300
                                rounded-xl
                                outline-none
                                text-center
                                tracking-[0.5em]
                                text-lg
                                font-semibold
                                focus:ring-2
                                focus:ring-[#2F6B5F]
                                focus:border-[#2F6B5F]
                                transition
                            "
                            placeholder="123456"
                        />
                    </div>

                    {error && (
                        <div
                            className="
                                bg-red-50
                                border
                                border-red-200
                                text-red-600
                                px-4
                                py-3
                                rounded-xl
                                text-sm
                            "
                        >
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            py-3
                            rounded-xl
                            bg-[#2F6B5F]
                            hover:bg-[#25564d]
                            text-white
                            font-semibold
                            transition
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                        "
                    >
                        {loading
                            ? "Verifying..."
                            : "Verify OTP"}
                    </button>
                </form>

                <p className="text-center text-sm text-slate-500 mt-6">
                    Didn't receive the code?
                    <button
                        type="button"
                        className="ml-1 text-[#2F6B5F] font-medium hover:underline"
                    >
                        Resend OTP
                    </button>
                </p>
            </div>
        </div>
    );
};

export default VerifyOTP;