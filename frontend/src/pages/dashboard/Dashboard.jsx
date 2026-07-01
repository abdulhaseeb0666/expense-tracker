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
import CategoryOverview from "../../components/dashboard/CategoryOverview";

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

    <div
        className="
            space-y-8
            max-[800px]:space-y-6
            max-[600px]:space-y-5
            max-[400px]:space-y-4
        "
    >

        {/* Summary */}
        <div
            className="
                grid
                gap-6
                max-[800px]:gap-5
                max-[600px]:gap-4
                max-[400px]:gap-3
            "
        >
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

        {/* Monthly Chart */}
        <div className="w-full overflow-x-auto">
            <MonthlyOverview
                data={monthlyStats}
            />
        </div>

        {/* Wallet & Category Charts */}
        <div
            className="
                grid
                grid-cols-2
                gap-6

                max-[800px]:grid-cols-1
                max-[800px]:gap-5

                max-[600px]:gap-4

                max-[400px]:gap-3
            "
        >
            <WalletOverview
                data={walletStats}
            />

            <CategoryOverview
                data={categoryStats}
            />
        </div>

        {/* Recent Transactions */}
        <div className="w-full overflow-x-auto">
            <RecentTransactions
                transactions={transactions}
            />
        </div>

    </div>

</DashboardLayout>
    );
};

export default Dashboard;