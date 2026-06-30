import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;

client.authentications["api-key"].apiKey =
    process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendOTP = async (email, otp) => {
    try {

        await apiInstance.sendTransacEmail({

            sender: {
                email: process.env.BREVO_SENDER_EMAIL,
                name: process.env.BREVO_SENDER_NAME
            },

            to: [
                {
                    email
                }
            ],

            subject: "Expense Tracker OTP Verification",

            htmlContent: `
                <div style="font-family:Arial;padding:30px">

                    <h2>Email Verification</h2>

                    <p>
                        Thank you for registering.
                    </p>

                    <p>
                        Your One-Time Password is:
                    </p>

                    <h1
                        style="
                            color:#10B981;
                            letter-spacing:6px;
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
                        If you didn't request this,
                        please ignore this email.
                    </small>

                </div>
            `

        });

        console.log("OTP email sent.");

    } catch (error) {

        console.error(
            "Brevo Error:",
            error.response?.body || error
        );

        throw error;
    }
};