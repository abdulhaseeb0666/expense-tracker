const formatCurrency = (amount, currency = "PKR") => {
    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency
    }).format(Number(amount || 0));
};

export default formatCurrency;