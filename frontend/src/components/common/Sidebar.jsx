import { Link , useLocation } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();

    const linkClass = (path) =>
        `px-4 py-2 rounded-lg transition font-medium ${
            location.pathname === path
                ? "bg-emerald-100 text-emerald-700"
                : "text-slate-600 hover:bg-slate-100"
        }`;

    return (
        <div className="w-64 bg-white border-r border-slate-200 h-screen p-5 sticky top-0">

            {/* Logo */}
            <h2 className="text-2xl font-bold text-emerald-600 mb-10">
                ExpenseTracker
            </h2>

            {/* Links */}
            <div className="flex flex-col gap-2">

                <Link to="/dashboard" className={linkClass("/dashboard")}>
                    Dashboard
                </Link>

                <Link to="/transactions" className={linkClass("/transactions")}>
                    Transactions
                </Link>

                <Link to="/wallets" className={linkClass("/wallets")}>
                    Wallets
                </Link>

                <Link to="/budgets" className={linkClass("/budgets")}>
                    Budgets
                </Link>

                <Link to="/profile" className={linkClass("/profile")}>
                    Profile
                </Link>

            </div>

        </div>
    );
};

export default Sidebar;