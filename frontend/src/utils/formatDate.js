export const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-PK", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
};