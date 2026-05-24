const BudgetCard = ({ budget }) => {
    return (
        <div className="p-4 border rounded">
            <h3 className="font-bold">{budget.category}</h3>

            <p>Budget: {budget.budget}</p>
            <p>Spent: {budget.spent}</p>

            <div className="w-full bg-gray-200 h-2 mt-2">
                <div
                    className="bg-green-500 h-2"
                    style={{ width: `${budget.percentageUsed}%` }}
                />
            </div>

            <p className="text-sm">
                {budget.percentageUsed}% used
            </p>

            {budget.exceeded && (
                <p className="text-red-500 text-sm">
                    Budget exceeded!
                </p>
            )}
        </div>
    );
};

export default BudgetCard;