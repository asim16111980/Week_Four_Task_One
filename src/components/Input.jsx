const Input = ({
  className = "",
  borderType = "underlined",
  type = "text",
  placeholder = "",
  value = "",
  onChange = null,
}) => {
  return (
    <div
      className={`${className} border-black text-sm md:text-base ${(borderType =
        "underlined" ? "border-b py-2" : "border rounded")}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="size-full placeholder:opacity-50 focus:outline-none "
      />
    </div>
  );
};

export default Input;
