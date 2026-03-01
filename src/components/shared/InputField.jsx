const InputField = ({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    value,
    placeholder,
    darkMode = false,
}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label
                htmlFor="id"
                className={`${
                    className ? className : ""
                } font-semibold text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`${
                    className ? className : ""
                } px-4 py-3 border outline-none bg-transparent rounded-lg transition-all duration-300 ${
                    darkMode 
                        ? "text-white border-dark-light focus:border-purple-500" 
                        : "text-gray-800 border-gray-300 focus:border-purple-500"
                } ${
                    errors[id]?.message ? "border-red-500" : "" 
                }`}
                {...register(id, {
                    required: {value: required, message},
                    minLength: min
                        ? { value: min, message: `Minimum ${min} character is required`}
                        : null,
                    pattern:
                        type === "email"
                            ? {
                                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                                message: "Invalid email"
                            }
                            : type === "url"
                            ? {
                                value: /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                                message: "Please enter a valid url"
                            }
                            : null,

                })}
                />

                {errors[id]?.message && (
                    <p className="text-sm font-semibold text-red-500 mt-1">
                        {errors[id]?.message}
                    </p>
                )}
        </div>
    );
};

export default InputField;
