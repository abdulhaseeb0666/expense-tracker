import DashboardLayout from "../../layouts/DashboardLayout";
import TransactionForm from "../../components/transaction/TransactionForm";
import useTransactions from "../../hooks/useTransactions";

const AddTransaction = () => {

    const { addTransaction } = useTransactions();

   const handleSubmit = async (data) => {
        try {
            await addTransaction(data);
            toast.success("Transaction added");
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    };

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Add Transaction</h1>
            <TransactionForm onSubmit={handleSubmit} />
        </DashboardLayout>
    );
};

export default AddTransaction;