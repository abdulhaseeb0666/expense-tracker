export const calculateTotals = (transactions = []) => {
    let income = 0;
    let expense = 0;

    transactions.forEach((t) => {
        const amount = Number(t.amount || 0);

        if (t.type === "income") {
            income += amount;
        } else {
            expense += amount;
        }
    });

    return {
        income,
        expense,
        balance: income - expense
    };
};