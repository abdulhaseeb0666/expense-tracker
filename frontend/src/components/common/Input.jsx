const Input = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder
}) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1">{label}</label>}

            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="w-full border p-2 rounded"
            />
        </div>
    );
};

export default Input;