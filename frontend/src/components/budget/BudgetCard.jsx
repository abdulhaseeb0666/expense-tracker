import { FaRegTrashAlt } from "react-icons/fa";
import useBudgets from "../../hooks/useBudget";
const BudgetCard = ({ budget }) => {

    const { removeBudget } = useBudgets();

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            `Delete "${budget.category}" budget?`
        );

        if (confirmDelete) {
            await removeBudget(budget._id);
            window.location.reload();
        }
    };

    return (
        <div className="p-4 border rounded">

            <div className="flex justify-between items-center mb-2">
                <div>
                    <h3 className="font-bold">{budget.category}</h3>

                    <p>Budget: {budget.budget}</p>
                    <p>Spent: {budget.spent}</p>
                </div>

                <button
                        onClick={handleDelete}
                        className="text-red-500 hover:text-red-700"
                    >
                        <FaRegTrashAlt size={25} />
                </button>
            </div>

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