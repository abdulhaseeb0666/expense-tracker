const Input = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder
}) => {
    return (
        <div className="space-y-2">

            {label && (
                <label
                    htmlFor={name}
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-700
                    "
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-[#D9E8E3]
                    bg-white
                    text-slate-800
                    placeholder:text-slate-400
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#4C8C7A]
                    focus:border-[#4C8C7A]
                    transition
                "
            />

        </div>
    );
};

export default Input;