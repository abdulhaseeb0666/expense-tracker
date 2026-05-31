import useAuth from "../../hooks/useAuth";

const Navbar = () => {

    const { user } = useAuth();

    return (
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">

            {/* Title */}
            <h1 className="text-xl font-bold text-slate-800">
                Financial Overview
            </h1>

            {/* User */}
            <div className="flex items-center gap-3 bg-slate-50 px-3 py-2 rounded-full">

                <img
                    src={
                        user?.avatar
                            ? `http://localhost:3000/${user.avatar}`
                            : "/default-avatar.svg"
                    }
                    alt="avatar"
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />

                <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium text-slate-800">
                        {user?.name || "User"}
                    </span>
                    <span className="text-xs text-slate-500">
                        Personal Account
                    </span>
                </div>

            </div>

        </div>
    );
};

export default Navbar;