import DashboardLayout from "../../layouts/DashboardLayout";
import TransactionList from "../../components/transaction/TransactionList";

const Transactions = () => {
    const transactions = [];

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Transactions</h1>
            <TransactionList transactions={transactions} />
        </DashboardLayout>
    );
};

export default Transactions;