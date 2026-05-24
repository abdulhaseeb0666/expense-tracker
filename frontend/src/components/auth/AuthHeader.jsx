const AuthHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
        </div>
    );
};

export default AuthHeader;