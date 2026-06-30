import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    requireTLS: true,
    logger: true,
    debug: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

transporter.verify((err) => {
    if (err) {
        console.error("SMTP Error:", err);
    } else {
        console.log("Brevo SMTP Connected");
    }
});

export const sendOTP = async (email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: `"Expense Tracker" <${process.env.SMTP_FROM}>`,
            to: email,
            subject: "Expense Tracker OTP Verification",
            html: `
                <div style="font-family:Arial,sans-serif">
                    <h2>Email Verification</h2>

                    <p>Your OTP is:</p>

                    <h1
                        style="
                            letter-spacing:5px;
                            color:#10b981;
                        "
                    >
                        ${otp}
                    </h1>

                    <p>
                        This OTP will expire in
                        <strong>10 minutes</strong>.
                    </p>

                    <hr>

                    <small>
                        If you didn't request this email,
                        please ignore it.
                    </small>
                </div>
            `,
        });

        console.log("Email sent:", info.messageId);
    } catch (err) {
        console.error(err);
        throw err;
    }
};