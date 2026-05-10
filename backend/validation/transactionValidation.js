import { check } from "express-validator";

export const transactionValidation = [
    check("wallet")
        .notEmpty().withMessage("Wallet is required"),

    check("type")
        .notEmpty().withMessage("Type is required")
        .isIn(["income", "expense"])
        .withMessage("Type must be income or expense"),

    check("category")
        .notEmpty().withMessage("Category is required"),

    check("title")
        .notEmpty().withMessage("Title is required"),

    check("amount")
        .notEmpty().withMessage("Amount is required")
        .isNumeric().withMessage("Amount must be a number")
        .custom(value => value > 0)
        .withMessage("Amount must be greater than 0"),

    check("note")
        .optional()
        .isString()
        .withMessage("Note must be a string")
];