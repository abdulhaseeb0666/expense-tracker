const Button = ({ children, onClick, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-black text-white rounded ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;