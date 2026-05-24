const TransactionTable = ({ transactions = [] }) => {
    return (
        <table className="w-full border">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Category</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((t) => (
                    <tr key={t._id} className="text-center border-t">
                        <td>{t.title}</td>
                        <td>{t.amount}</td>
                        <td>{t.type}</td>
                        <td>{t.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;