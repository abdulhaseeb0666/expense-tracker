import {
    FaWallet,
    FaMoneyBillWave,
    FaChartPie,
    FaBullseye,
    FaExchangeAlt,
    FaLock,
    FaChartLine,
    FaMobileAlt,
    FaCloud,
    FaGoogle
} from "react-icons/fa";

const Features = () => {

    const features = [
        {
            icon: <FaWallet />,
            title: "Multi-Wallet Management",
            description:
                "Create and manage multiple wallets including cash, bank accounts, and digital wallets with real-time balance tracking."
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Expense Tracking",
            description:
                "Record and organize your daily expenses effortlessly with categorized transaction management."
        },
        {
            icon: <FaChartPie />,
            title: "Interactive Analytics",
            description:
                "Visualize spending habits through beautiful charts, graphs, and financial reports."
        },
        {
            icon: <FaBullseye />,
            title: "Budget Planning",
            description:
                "Set monthly or weekly budgets and receive alerts when you're approaching your limits."
        },
        {
            icon: <FaExchangeAlt />,
            title: "Income & Expense Monitoring",
            description:
                "Track all incoming and outgoing funds to maintain complete control over your finances."
        },
        {
            icon: <FaChartLine />,
            title: "Financial Insights",
            description:
                "Analyze trends and identify opportunities to save more and spend smarter."
        },
        {
            icon: <FaGoogle />,
            title: "Google Authentication",
            description:
                "Sign up and log in securely using your Google account for a faster onboarding experience."
        },
        {
            icon: <FaLock />,
            title: "Secure Authentication",
            description:
                "Protected accounts with JWT authentication, OTP verification, and encrypted passwords."
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            description:
                "Access your finances seamlessly from desktops, tablets, and smartphones."
        },
        {
            icon: <FaCloud />,
            title: "Cloud-Based Storage",
            description:
                "Your financial data is stored securely and remains accessible whenever you need it."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                        Powerful Financial Tools
                    </span>

                    <h1 className="text-5xl font-bold text-slate-800 mt-6">
                        Features Designed For
                        <span className="text-emerald-600">
                            {" "}Smarter Money Management
                        </span>
                    </h1>

                    <p className="text-slate-600 text-lg mt-6 leading-relaxed">
                        Everything you need to track expenses, manage budgets,
                        monitor wallets, and gain valuable insights into your
                        financial health.
                    </p>

                </div>

            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((feature, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-sm
                                border
                                border-emerald-100
                                hover:shadow-xl
                                hover:-translate-y-1
                                transition-all
                                duration-300
                            "
                        >

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-emerald-100
                                    text-emerald-600
                                    flex
                                    items-center
                                    justify-center
                                    text-2xl
                                    mb-5
                                "
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* Bottom CTA */}
            <section className="bg-white border-t border-emerald-100 py-20">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-4">
                        Ready to Take Control of Your Finances?
                    </h2>

                    <p className="text-slate-600 text-lg mb-8">
                        Start tracking your expenses, managing budgets,
                        and improving your financial habits today.
                    </p>

                    <a
                        href="/register"
                        className="
                            inline-block
                            px-8
                            py-4
                            bg-emerald-600
                            hover:bg-emerald-700
                            text-white
                            font-semibold
                            rounded-xl
                            transition
                            shadow-lg
                        "
                    >
                        Get Started Free
                    </a>

                </div>

            </section>

        </div>
    );
};

export default Features;