import { Link } from "react-router-dom";
import { FaWallet, FaChartPie, FaMoneyBillWave } from "react-icons/fa";

const Home = () => {

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black">
                        Expense Tracker
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 border rounded hover:bg-gray-100"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Manage Your
                            <span className="text-green-600">
                                {" "}Expenses{" "}
                            </span>
                            Smarter
                        </h1>
                        <p className="text-gray-600 text-lg mb-8">

                            Track income, monitor expenses,
                            manage wallets, and control budgets
                            all in one modern expense tracking app.

                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="/register"
                                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/login"
                                className="px-6 py-3 border rounded-lg hover:bg-gray-200"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-4 rounded-full">
                                    <FaWallet
                                        className="text-green-600"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Wallet Management
                                    </h3>
                                    <p className="text-gray-500">
                                        Manage multiple wallets easily
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <FaMoneyBillWave
                                        className="text-blue-600"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Transaction Tracking
                                    </h3>
                                    <p className="text-gray-500">
                                        Track income and expenses instantly
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-4 rounded-full">
                                    <FaChartPie
                                        className="text-purple-600"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Analytics & Budgets
                                    </h3>
                                    <p className="text-gray-500">
                                        Visualize spending with analytics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Features
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-bold mb-3">
                            Expense Tracking
                        </h3>
                        <p className="text-gray-600">
                            Record and categorize all your daily transactions.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-bold mb-3">
                            Budget Planning
                        </h3>
                        <p className="text-gray-600">
                            Set monthly budgets and monitor spending limits.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-bold mb-3">
                            Financial Analytics
                        </h3>
                        <p className="text-gray-600">
                            Understand your financial habits with charts.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;