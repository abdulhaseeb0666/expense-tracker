const TransactionFilters = ({ setFilter }) => {
    return (
        <div
            className="
                flex
                gap-3
                bg-[#F7FAF9]
                p-2
                rounded-2xl
                border
                border-[#D9E8E3]
                w-fit
            "
        >

            <button
                onClick={() => setFilter("all")}
                className="
                     px-5
                    py-2
                    rounded-xl
                    hover:bg-green-50
                "
            >
                All
            </button>

            <button
                onClick={() => setFilter("income")}
                className="
                    px-5
                    py-2
                    rounded-xl
                    text-green-700
                    hover:bg-green-50
                "
            >
                Income
            </button>

            <button
                onClick={() => setFilter("expense")}
                className="
                    px-5
                    py-2
                    rounded-xl
                    text-red-700
                    hover:bg-red-50
                "
            >
                Expense
            </button>

        </div>
    );
};

export default TransactionFilters;