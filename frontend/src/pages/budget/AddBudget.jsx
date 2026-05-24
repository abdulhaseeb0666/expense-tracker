import DashboardLayout from "../../layouts/DashboardLayout";
import BudgetForm from "../../components/budget/BudgetForm";

const AddBudget = () => {
    const handleSubmit = (data) => {
        console.log("Budget:", data);
    };

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Add Budget</h1>
            <BudgetForm onSubmit={handleSubmit} />
        </DashboardLayout>
    );
};

export default AddBudget;