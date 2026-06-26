import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
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

export const sendOTP = async (email, otp) => {
    try {

        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Expense Tracker OTP",
            html: `
                <h2>Your OTP</h2>
                <h1>${otp}</h1>
            `
        });

        console.log(info);

    } catch (err) {
        console.error("SEND OTP ERROR:", err);
        throw err;
    }
};