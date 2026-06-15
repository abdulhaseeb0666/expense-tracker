import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

transporter.verify((error, success) => {

    if (error) {
        console.log("MAIL ERROR:", error);
    } else {
        console.log("MAIL SERVER READY");
    }

});

export const sendOTP = async (
        email,
        otp
    ) => {


    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject:
            "Expense Tracker OTP Verification",
        html: `
            <h2>Your OTP</h2>
            <h1>${otp}</h1>
            <p>Valid for 10 minutes</p>
        `
    });

};