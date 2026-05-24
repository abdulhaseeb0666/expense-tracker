import DashboardLayout from "../../layouts/DashboardLayout";
import BudgetList from "../../components/budget/BudgetList";

const Budgets = () => {
    const budgets = [];

    return (
        <DashboardLayout>
            <h1 className="text-xl font-bold mb-4">Budgets</h1>
            <BudgetList budgets={budgets} />
        </DashboardLayout>
    );
};

export default Budgets;