const TermsOfService = () => {
    return (

        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">

            <div className="max-w-5xl mx-auto px-6 py-16">

                {/* Header */}

                <div className="text-center mb-12">

                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        Terms of Service
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
                                1. Acceptance of Terms
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using ExpenseTracker, you agree to
                                comply with and be bound by these Terms of Service.
                                If you do not agree with any part of these terms,
                                you should discontinue use of the platform.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                2. Description of Service
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                ExpenseTracker provides tools for managing personal
                                finances, including expense tracking, wallet
                                management, budgeting, analytics, and account
                                management features.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                3. User Accounts
                            </h2>

                            <ul className="space-y-3 text-slate-600 list-disc ml-6">

                                <li>
                                    You are responsible for maintaining the
                                    confidentiality of your account credentials.
                                </li>

                                <li>
                                    You must provide accurate and complete
                                    registration information.
                                </li>

                                <li>
                                    You are responsible for all activities
                                    performed through your account.
                                </li>

                                <li>
                                    You must immediately notify us of any
                                    unauthorized access to your account.
                                </li>

                            </ul>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                4. Google Authentication
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                Users may choose to authenticate through Google
                                OAuth. By doing so, you authorize ExpenseTracker
                                to access basic profile information provided by
                                Google, such as your name, email address, and
                                profile picture.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                5. Acceptable Use
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-4">
                                You agree not to:
                            </p>

                            <ul className="space-y-3 text-slate-600 list-disc ml-6">

                                <li>
                                    Use the platform for unlawful purposes.
                                </li>

                                <li>
                                    Attempt to gain unauthorized access to
                                    accounts, servers, or databases.
                                </li>

                                <li>
                                    Upload malicious code, malware, or harmful
                                    content.
                                </li>

                                <li>
                                    Interfere with the normal operation of the
                                    platform.
                                </li>

                            </ul>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                6. Financial Disclaimer
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                ExpenseTracker is intended for informational and
                                organizational purposes only. The platform does
                                not provide financial, investment, tax, or legal
                                advice. Users are solely responsible for decisions
                                made based on information stored within the system.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                7. Data Storage and Security
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We implement reasonable security measures to
                                protect user data. However, no system can be
                                guaranteed completely secure, and users acknowledge
                                the inherent risks of transmitting information over
                                the internet.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                8. Account Termination
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to suspend or terminate
                                accounts that violate these Terms of Service or
                                engage in activities that may harm the platform
                                or other users.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                9. Limitation of Liability
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                ExpenseTracker shall not be liable for any direct,
                                indirect, incidental, special, or consequential
                                damages arising from the use or inability to use
                                the platform.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                10. Changes to These Terms
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                We may revise these Terms of Service at any time.
                                Updated versions will be posted on this page and
                                become effective immediately upon publication.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                11. Governing Law
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                These Terms of Service shall be governed and
                                interpreted in accordance with the applicable laws
                                of your jurisdiction.
                            </p>

                        </section>

                        <section>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                12. Contact Information
                            </h2>

                            <p className="text-slate-600 leading-relaxed">
                                For questions regarding these Terms of Service,
                                please contact us through the Contact Us page or
                                email support@expensetracker.com.
                            </p>

                        </section>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default TermsOfService;