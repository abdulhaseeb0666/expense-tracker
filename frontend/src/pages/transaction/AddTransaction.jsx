import DashboardLayout from "../../layouts/DashboardLayout";
import TransactionForm from "../../components/transaction/TransactionForm";

const AddTransaction = () => {
    const handleSubmit = (data) => {
        console.log("New Transaction:", data);
    };

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Add Transaction</h1>
            <TransactionForm onSubmit={handleSubmit} />
        </DashboardLayout>
    );
};

export default AddTransaction;