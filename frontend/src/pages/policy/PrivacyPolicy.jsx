const PrivacyPolicy = () => {
    return (

        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">

            <div className="max-w-5xl mx-auto px-6 py-16">

                {/* Header */}

                <div className="text-center mb-12">

                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        Privacy Policy
                    </h1>

                    <p className="text-slate-600 text-lg">
                        Last Updated: June 2026
                    </p>

                </div>

                {/* Content */}

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">

                    <div className="space-y-10">

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                1. Introduction
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                ExpenseTracker respects your privacy and is committed
                                to protecting your personal information. This Privacy
                                Policy explains how we collect, use, store, and protect
                                your data when you use our platform.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                2. Information We Collect
                            </h2>

                            <ul className="space-y-3 text-slate-600 list-disc ml-6">

                                <li>
                                    Personal information such as your name and email address.
                                </li>

                                <li>
                                    Account credentials including encrypted passwords.
                                </li>

                                <li>
                                    Financial data such as wallets, transactions, and budgets.
                                </li>

                                <li>
                                    Authentication information from Google OAuth.
                                </li>

                                <li>
                                    Usage data and analytics that help improve the platform.
                                </li>

                            </ul>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                3. How We Use Your Information
                            </h2>

                            <ul className="space-y-3 text-slate-600 list-disc ml-6">

                                <li>To create and manage your account.</li>

                                <li>To provide budgeting and expense tracking services.</li>

                                <li>To verify your identity through OTP verification.</li>

                                <li>To improve performance and user experience.</li>

                                <li>To communicate important account notifications.</li>

                            </ul>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                4. Data Security
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We implement industry-standard security measures to
                                protect your information. Passwords are securely
                                encrypted before storage, and access to your data is
                                restricted through authentication and authorization
                                mechanisms.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                5. Google Authentication
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                If you choose to sign in using Google OAuth, we may
                                receive your name, email address, and profile picture
                                from Google. We only use this information to create and
                                manage your ExpenseTracker account.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                6. Cookies and Sessions
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We may use cookies, sessions, and authentication tokens
                                to maintain secure login sessions and improve user
                                experience while using the platform.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                7. Third-Party Services
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                Our platform may integrate with third-party services
                                including Google OAuth and email providers for OTP
                                verification. These services operate under their own
                                privacy policies.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                8. Your Rights
                            </h2>

                            <ul className="space-y-3 text-slate-600 list-disc ml-6">

                                <li>Access your personal data.</li>

                                <li>Request corrections to inaccurate information.</li>

                                <li>Request deletion of your account.</li>

                                <li>Withdraw consent where applicable.</li>

                            </ul>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                9. Changes to This Policy
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy from time to time.
                                Any changes will be posted on this page with an updated
                                revision date.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                10. Contact Us
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                If you have any questions regarding this Privacy Policy,
                                please contact us through the Contact Us page or email us
                                at support@expensetracker.com.
                            </p>

                        </section>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default PrivacyPolicy;