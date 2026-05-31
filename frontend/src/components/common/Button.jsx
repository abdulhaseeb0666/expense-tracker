const Button = ({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                px-5 py-3
                rounded-xl
                font-semibold
                bg-[#2F6B5F]
                text-white
                hover:bg-[#24564C]
                active:scale-95
                transition-all
                shadow-md
                hover:shadow-lg
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;