const AuthHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-6">
            
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {title}
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
                {subtitle}
            </p>

        </div>
    );
};

export default AuthHeader;