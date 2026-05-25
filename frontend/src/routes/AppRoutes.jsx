import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";

import Transactions from "../pages/transaction/Transactions";
import AddTransaction from "../pages/transaction/AddTransaction";
import EditTransaction from "../pages/transaction/EditTransaction";

import Wallet from "../pages/wallet/Wallets";
import AddWallet from "../pages/wallet/AddWallet";
import EditWallet from "../pages/wallet/EditWallet";

import Budgets from "../pages/budget/Budgets";
import AddBudget from "../pages/budget/AddBudget";
import EditBudget from "../pages/budget/EditBudget";

import Profile from "../pages/profile/Profile";

import ProtectedRoute from "../components/common/ProtectedRoute";
import NotFound from "../pages/error/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
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
                
            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;