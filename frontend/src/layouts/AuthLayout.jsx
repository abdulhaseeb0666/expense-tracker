const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-green-100 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

            <div
                className="
                    w-full
                    max-w-md
                    sm:max-w-lg
                    lg:max-w-xl
                    bg-white
                    rounded-3xl
                    shadow-2xl
                    border
                    border-green-100
                    p-6
                    sm:p-8
                    lg:p-10
                "
            >
                {children}
            </div>

        </div>
    );
};

export default AuthLayout;