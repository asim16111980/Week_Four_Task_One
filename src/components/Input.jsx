const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = null,onFocus
}) => {
  return (
    <div className=" border-b border-black">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        className="size-full py-2 placeholder:opacity-40 focus:outline-none text-sm md:text-base"
      />
    </div>
  );
};

export default Input;
