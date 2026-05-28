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

            console.log(error.response?.data);

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

            <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">

                <h1 className="text-3xl font-bold mb-6">
                    Profile
                </h1>

                <div className="flex justify-center mb-6">

                    <img
                        src={
                            user?.avatar
                                ? `http://localhost:3000/${user.avatar}`
                                : "/default-avatar.png"
                        }
                        alt="avatar"
                        className="w-28 h-28 rounded-full object-cover border"
                    />

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <div>

                        <label className="block mb-1 font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />

                    </div>

                    <div>

                        <label className="block mb-1 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />

                    </div>

                    <div>

                        <label className="block mb-1 font-medium">
                            Currency
                        </label>

                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        >
                            <option value="PKR">PKR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>

                    </div>

                    <div>

                        <label className="block mb-1 font-medium">
                            New Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Leave empty if unchanged"
                            className="w-full border p-3 rounded"
                        />

                    </div>

                    <div>

                        <label className="block mb-1 font-medium">
                            Avatar
                        </label>

                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />

                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Update Profile
                    </Button>

                </form>

            </div>

        </DashboardLayout>
    );
};

export default Profile;