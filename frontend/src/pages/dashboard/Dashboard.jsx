import DashboardLayout from "../../layouts/DashboardLayout";
import SummaryCards from "../../components/dashboard/SummaryCards";
import BalanceCard from "../../components/dashboard/BalanceCard";
import RecentTransactions from "../../components/dashboard/RecentTransactions";

const Dashboard = () => {
    const dummyData = {
        income: 50000,
        expense: 20000,
        balance: 30000
    };

    const dummyTransactions = [
        { _id: 1, title: "Salary", amount: 50000, type: "income" },
        { _id: 2, title: "Food", amount: 2000, type: "expense" }
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <BalanceCard balance={dummyData.balance} />
                <SummaryCards data={dummyData} />
                <RecentTransactions transactions={dummyTransactions} />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;