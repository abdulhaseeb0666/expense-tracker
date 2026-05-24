import BudgetCard from "./BudgetCard";

const BudgetList = ({ budgets = [] }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {budgets.map((b) => (
                <BudgetCard key={b.category} budget={b} />
            ))}
        </div>
    );
};

export default BudgetList;