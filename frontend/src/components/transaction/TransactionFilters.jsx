const TransactionFilters = ({ setFilter }) => {
    return (
        <div className="flex gap-2">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("income")}>Income</button>
            <button onClick={() => setFilter("expense")}>Expense</button>
        </div>
    );
};

export default TransactionFilters;