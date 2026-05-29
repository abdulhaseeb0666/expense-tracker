// src/pages/dashboard/Dashboard.jsx

import DashboardLayout from "../../layouts/DashboardLayout";

import BalanceCard from "../../components/dashboard/BalanceCard";
import SummaryCards from "../../components/dashboard/SummaryCards";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import WalletOverview from "../../components/dashboard/WalletOverview";
import MonthlyOverview from "../../components/dashboard/MonthlyOverview";

import Loader from "../../components/common/Loader";

import useAnalytics from "../../hooks/useAnalytics";
import useTransactions from "../../hooks/useTransactions";

const Dashboard = () => {

    const {
        summary,
        loading,
        error,
        monthlyStats,
        categoryStats,
        walletStats
    } = useAnalytics();

    const {
        transactions
    } = useTransactions();

    if (loading) {
        return (
            <DashboardLayout>
                <Loader />
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <div className="bg-red-100 text-red-600 p-4 rounded">
                    {error}
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <div className="space-y-6">

                {/* Top Statistics */}
                <div className="flex flex-col gap-6">

                    <BalanceCard
                        balance={summary?.balance || 0}
                    />

                    <SummaryCards
                        data={{
                            income: summary?.income || 0,
                            expense: summary?.expense || 0,
                            balance: summary?.balance || 0
                        }}
                    />

                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <MonthlyOverview data={monthlyStats} />

                    <WalletOverview data={walletStats} />

                </div>

                {/* Recent Transactions */}
                <RecentTransactions
                    transactions={transactions}
                />

            </div>

        </DashboardLayout>
    );
};

export default Dashboard;