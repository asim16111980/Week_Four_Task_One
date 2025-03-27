const Input = ({ type = "text", placeholder = "" }) => {
  return (
    <div className=" border-b border-black">
      <input
        type="text"
        placeholder="Email or Phone Number"
        className="size-full placeholder:opacity-40 focus:outline-none text-sm md:text-base"
      />
    </div>
  );
};

export default Input;
