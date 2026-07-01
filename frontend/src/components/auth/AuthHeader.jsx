const AuthHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-8">

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                {title}
            </h1>

            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
                {subtitle}
            </p>

        </div>
    );
};

export default AuthHeader;