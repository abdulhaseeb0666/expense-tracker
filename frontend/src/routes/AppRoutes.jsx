import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import OAuthSuccess from "../pages/auth/OAuthSuccess.jsx";
import VerifyOTP from "../pages/otp/verifyOTP.jsx";

const Dashboard = React.lazy(() => import('./../pages/dashboard/Dashboard.jsx')); 

import ContactUs from "../pages/contact/ContactUs.jsx";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy.jsx";
import TermsOfService from "../pages/terms/TermsOfService.jsx";
import Features from "../pages/features/Features.jsx";

import Transactions from "../pages/transaction/Transactions.jsx";
import AddTransaction from "../pages/transaction/AddTransaction.jsx";
import EditTransaction from "../pages/transaction/EditTransaction.jsx";

import Wallet from "../pages/wallet/Wallets.jsx";
import AddWallet from "../pages/wallet/AddWallet.jsx";
import EditWallet from "../pages/wallet/EditWallet.jsx";

import Budgets from "../pages/budget/Budgets.jsx";
import AddBudget from "../pages/budget/AddBudget.jsx";
import EditBudget from "../pages/budget/EditBudget.jsx";

import Profile from "../pages/profile/Profile.jsx";

import ProtectedRoute from "../components/common/ProtectedRoute.jsx";
import NotFound from "../pages/error/NotFound.jsx";
import Home from "../pages/home/Home.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/features" element={<Features />} />

                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                
                <Route path="/wallets" element={
                    <ProtectedRoute>
                        <Wallet />
                    </ProtectedRoute>
                } />
                <Route path="/wallets/add" element={
                    <ProtectedRoute>
                        <AddWallet />
                    </ProtectedRoute>
                } />
                <Route path="/wallets/edit/:id" element={
                    <ProtectedRoute>
                        <EditWallet />
                    </ProtectedRoute>
                } />

                <Route path="/transactions" element={
                    <ProtectedRoute>
                        <Transactions />
                    </ProtectedRoute>
                } />
                <Route path="/transactions/add" element={
                    <ProtectedRoute>
                        <AddTransaction />
                    </ProtectedRoute>
                } />
                <Route path="/transactions/edit/:id" element={
                    <ProtectedRoute>
                        <EditTransaction />
                    </ProtectedRoute>
                } />

                <Route path="/budgets" element={
                    <ProtectedRoute>
                        <Budgets />
                    </ProtectedRoute>
                } />
                <Route path="/budgets/add" element={
                    <ProtectedRoute>
                        <AddBudget />
                    </ProtectedRoute>
                } />
                <Route path="/budgets/edit/:id" element={
                    <ProtectedRoute>
                        <EditBudget />
                    </ProtectedRoute>
                } />

                <Route path="/profile" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } />
                <Route path="*" element={
                        <NotFound />
                } />
                <Route
                    element={<OAuthSuccess />} path="/oauth-success"
                />
                <Route
                    path="/verify-otp"
                    element={<VerifyOTP />}
                />
            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;