import TransactionCard from "./TransactionCard";

const TransactionList = ({ transactions = [] }) => {
    return (
        <div className="space-y-4">

            {transactions.map((t) => (

                <TransactionCard
                    key={t._id}
                    transaction={t}
                />

            ))}

        </div>
    );
};

export default TransactionList;