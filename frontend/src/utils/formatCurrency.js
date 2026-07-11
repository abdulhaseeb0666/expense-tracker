const currencyLocales = {
    PKR: "en-PK",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    INR: "en-IN",
    AED: "ar-AE",
    SAR: "ar-SA",
    QAR: "ar-QA",
    CAD: "en-CA",
    AUD: "en-AU",
    JPY: "ja-JP",
    CNY: "zh-CN"
};

const formatCurrency = (
    amount,
    currency = "USD"
) => {

    const locale =
        currencyLocales[currency] || "en-US";

    return new Intl.NumberFormat(
        locale,
        {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    ).format(Number(amount || 0));

};

export default formatCurrency;