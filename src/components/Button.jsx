const Button = ({ className = "", value, icon = null }) => {
  return (
    <button
      type="button"
      className={`${className} 
        `}
    >
      <span className="min-w-28 size-full flex justify-center items-center gap-3 caret-transparent font-poppins text-xs sm:text-sm md:text-base font-medium py-4 ">
        {icon && icon}
        <span className="h-full flex justify-center items-center">{value}</span>
      </span>
    </button>
  );
};

export default Button;
// ${
//   (isFilled &&
//     isPrimary &&
//     "bg-[#DB4444] text-[#FAFAFA] hover:bg-[#E07575]") ||
//   (isFilled &&
//     !isPrimary &&
//     "bg-[#00FF66] text-[#FAFAFA] hover:bg-[#3cf385]") ||
//   (!isFilled &&
//     "bg-transparent border border-black border-opacity-50 text-black hover:text-opacity-50")
// }
