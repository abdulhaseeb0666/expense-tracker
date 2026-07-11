// src/pages/profile/Profile.jsx

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import Loader from "../../components/common/Loader";
import Button from "../../components/common/Button";

import useAuth from "../../hooks/useAuth";

import {
    getProfile,
    updateProfile
} from "../../services/userService";

const Profile = () => {

    const { user, setUser } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        currency: "PKR",
        password: "",
        avatar: null
    });

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                setLoading(true);

                const data = await getProfile();

                setFormData({
                    name: data.user.name || "",
                    email: data.user.email || "",
                    currency: data.user.currency || "PKR",
                    password: "",
                    avatar: null
                });

            } catch (error) {

                toast.error(
                    error.response?.data?.message ||
                    "Failed to load profile"
                );

            } finally {

                setLoading(false);
            }
        };

        fetchProfile();

    }, []);

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        if (name === "avatar") {

            setFormData({
                ...formData,
                avatar: files[0]
            });

            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const submitData = new FormData();

            submitData.append("name", formData.name);
            submitData.append("email", formData.email);
            submitData.append("currency", formData.currency);

            if (formData.password) {
                submitData.append("password", formData.password);
            }

            if (formData.avatar) {
                submitData.append("avatar", formData.avatar);
            }

            const data = await updateProfile(submitData);

            setUser(data.user);

            toast.success("Profile updated successfully");

            setFormData((prev) => ({
                ...prev,
                password: "",
                avatar: null
            }));

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update profile"
            );

        } finally {

            setLoading(false);
        }
    };

    if (loading && !user) {
        return (
            <DashboardLayout>
                <Loader />
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-[#2F6B5F]">
                        My Profile
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Manage your personal information and account preferences
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Profile Card */}
                    <div
                        className="
                            bg-white
                            rounded-3xl
                            border
                            border-[#D9E8E3]
                            p-8
                            shadow-sm
                        "
                    >

                        <div className="flex flex-col items-center">

                            <div className="relative">

                                <img
                                    src={
                                        user?.avatar
                                            ? `https://expense-tracker-p3ec.onrender.com/${user.avatar}`
                                            : "/default-avatar.png"
                                    }
                                    alt="avatar"
                                    className="
                                        w-36
                                        h-36
                                        rounded-full
                                        object-cover
                                        border-4
                                        border-[#EAF4F1]
                                        shadow-md
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        bottom-1
                                        right-1
                                        w-5
                                        h-5
                                        bg-green-500
                                        rounded-full
                                        border-2
                                        border-white
                                    "
                                />

                            </div>

                            <h2 className="mt-5 text-2xl font-bold text-slate-800">
                                {user?.name}
                            </h2>

                            <p className="text-slate-500">
                                {user?.email}
                            </p>

                            <div className="mt-3 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                                Preferred Currency: {user?.currency || "PKR"}
                            </div>

                        </div>

                    </div>

                    {/* Settings Form */}
                    <div
                        className="
                            lg:col-span-2
                            bg-white
                            rounded-3xl
                            border
                            border-[#D9E8E3]
                            p-8
                            shadow-sm
                        "
                    >

                        <div className="mb-8">

                            <h2 className="text-2xl font-bold text-slate-800">
                                Account Settings
                            </h2>

                            <p className="text-slate-500 mt-1">
                                Update your profile details and preferences
                            </p>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name */}

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
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-[#D9E8E3]
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#5E9C89]
                                    "
                                />

                            </div>

                            {/* Email */}

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
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-[#D9E8E3]
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#5E9C89]
                                    "
                                />

                            </div>

                            {/* Currency */}

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
                                    Preferred Currency
                                </label>

                                <select
                                    name="currency"
                                    value={formData.currency}
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
                                >
                                    <option value="USD">USD - US Dollar</option>
                                    <option value="EUR">EUR - Euro</option>
                                    <option value="GBP">GBP - British Pound</option>
                                    <option value="PKR">PKR - Pakistani Rupee</option>
                                    <option value="INR">INR - Indian Rupee</option>
                                    <option value="AED">AED - UAE Dirham</option>
                                    <option value="SAR">SAR - Saudi Riyal</option>
                                    <option value="QAR">QAR - Qatari Riyal</option>
                                    <option value="CAD">CAD - Canadian Dollar</option>
                                    <option value="AUD">AUD - Australian Dollar</option>
                                    <option value="JPY">JPY - Japanese Yen</option>
                                    <option value="CNY">CNY - Chinese Yuan</option>
                                </select>

                                <p className="text-xs text-slate-500 mt-2">
                                    This currency will be used throughout your dashboard,
                                    charts, wallets and transactions.
                                </p>

                            </div>

                            {/* Password */}

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
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Leave blank to keep current password"
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-[#D9E8E3]
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#5E9C89]
                                    "
                                />

                            </div>

                            {/* Avatar Upload */}

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
                                    Profile Picture
                                </label>

                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        p-3
                                        rounded-xl
                                        border
                                        border-dashed
                                        border-[#A7CDBF]
                                        bg-[#F7FBFA]
                                        cursor-pointer
                                    "
                                />

                            </div>

                            {/* Save Button */}

                            <Button
                                type="submit"
                                className="
                                    w-full
                                    py-4
                                    text-lg
                                "
                            >
                                Save Changes
                            </Button>

                        </form>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Profile;