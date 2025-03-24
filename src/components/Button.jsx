const Button = ({ isFilled = true, isPrimary = true, width, value }) => {
  return (
    <button
      type="button" 
      className={`rounded caret-transparent font-["poppins"] text-sm font-medium h-14 px-6 py-3 ${
        (isFilled &&
          isPrimary &&
          "bg-[#DB4444] text-[#FAFAFA] hover:bg-[#E07575]") ||
        (isFilled &&
          !isPrimary &&
          "bg-[#00FF66] text-[#FAFAFA] hover:bg-[#3cf385]") ||
        (!isFilled &&
          "bg-transparent border border-black border-opacity-50 text-black hover:text-opacity-50")
      }`}
      style={{ width: `${width}px` }}
    >
      {value}
    </button>
  );
};

export default Button;
