import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 bg-black text-white min-h-screen p-5">

            <h2 className="text-2xl font-bold mb-10">
                Dashboard
            </h2>

            <div className="flex flex-col gap-4">

                <Link to="/dashboard">Dashboard</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/wallets">Wallets</Link>
                <Link to="/budgets">Budgets</Link>
                <Link to="/profile">Profile</Link>

            </div>

        </div>
    );
};

export default Sidebar;