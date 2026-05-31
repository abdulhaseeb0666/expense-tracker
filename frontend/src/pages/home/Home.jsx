import { Link } from "react-router-dom";
import {
    FaWallet,
    FaMoneyBillWave,
    FaChartPie,
    FaShieldAlt,
    FaMobileAlt,
    FaChartLine
} from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A]">

            {/* Navbar */}
            <nav className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-2xl font-bold text-emerald-600">
                        ExpenseTracker
                    </h1>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-slate-700 hover:text-emerald-600 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left */}
                    <div>
                        <p className="text-emerald-600 font-semibold mb-3">
                            Smarter Personal Finance
                        </p>

                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Take Control of Your
                            <span className="text-emerald-600">
                                {" "}Money{" "}
                            </span>
                            with Clarity
                        </h1>

                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Track expenses, manage wallets, set budgets,
                            and understand your financial habits—all in one
                            clean, modern dashboard designed for simplicity.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                to="/register"
                                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                            >
                                Start Free
                            </Link>

                            <Link
                                to="/login"
                                className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-white transition"
                            >
                                Login
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="flex gap-6 mt-8 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <FaShieldAlt className="text-emerald-600" />
                                Secure Data
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMobileAlt className="text-emerald-600" />
                                Mobile Friendly
                            </div>
                            <div className="flex items-center gap-2">
                                <FaChartLine className="text-emerald-600" />
                                Smart Analytics
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

                        <h3 className="text-lg font-bold mb-6">
                            Why users love it
                        </h3>

                        <div className="space-y-6">

                            <Feature
                                icon={<FaWallet />}
                                title="Smart Wallets"
                                desc="Manage multiple wallets with real-time balance updates"
                            />

                            <Feature
                                icon={<FaMoneyBillWave />}
                                title="Live Transactions"
                                desc="Track income & expenses instantly with accuracy"
                            />

                            <Feature
                                icon={<FaChartPie />}
                                title="Visual Insights"
                                desc="Understand spending patterns with clean charts"
                            />

                        </div>
                    </div>

                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white border-y border-slate-200 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

                    <Stat number="100%" label="Expense Visibility" />
                    <Stat number="24/7" label="Tracking Access" />
                    <Stat number="∞" label="Wallets Supported" />

                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Everything you need to manage money
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <Card
                        title="Expense Tracking"
                        desc="Automatically categorize and monitor your spending."
                    />

                    <Card
                        title="Budget Control"
                        desc="Set monthly limits and avoid overspending."
                    />

                    <Card
                        title="Financial Insights"
                        desc="Understand your income vs expense behavior."
                    />

                </div>

            </section>

        </div>
    );
};

export default Home;

/* ---------------- Components ---------------- */

const Feature = ({ icon, title, desc }) => (
    <div className="flex gap-4">
        <div className="text-emerald-600 text-xl mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-slate-500 text-sm">{desc}</p>
        </div>
    </div>
);

const Card = ({ title, desc }) => (
    <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-sm transition">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-slate-600">{desc}</p>
    </div>
);

const Stat = ({ number, label }) => (
    <div>
        <h3 className="text-3xl font-bold text-emerald-600">
            {number}
        </h3>
        <p className="text-slate-500 mt-1">{label}</p>
    </div>
);