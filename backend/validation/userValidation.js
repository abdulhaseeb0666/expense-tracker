import { check } from "express-validator";

export const updateUserValidation = [
    check("name")
        .optional()
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters"),

    check("email")
        .optional()
        .isEmail()
        .withMessage("Invalid email format"),

    check("password")
        .optional()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    check("currency")
        .optional()
        .isString()
        .withMessage("Currency must be a string")
];