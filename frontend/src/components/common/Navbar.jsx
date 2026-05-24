import useAuth from "../../hooks/useAuth";

const Navbar = () => {

    const { user } = useAuth();

    return (
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                Expense Tracker
            </h1>

            <div className="flex items-center gap-3">

                <img
                    src={`http://localhost:5000/${user?.avatar}`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                />

                <span>
                    {user?.name}
                </span>

            </div>

        </div>
    );
};

export default Navbar;