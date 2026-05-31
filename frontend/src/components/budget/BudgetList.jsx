import BudgetCard from "./BudgetCard";

const BudgetList = ({ budgets = [] }) => {
    return (
        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
            "
        >

            {budgets.map((budget) => (

                <BudgetCard
                    key={budget.category}
                    budget={budget}
                />

            ))}

        </div>
    );
};

export default BudgetList;