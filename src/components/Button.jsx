const Button = ({ className = "", value, icon = null, onClick }) => {
  return (
    <button
      type="button"
      className={`${className} 
        `}
      onClick={onClick}
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
//     "bg-[#DB4444] text-neutral-50 hover:bg-[#E07575]") ||
//   (isFilled &&
//     !isPrimary &&
//     "bg-[#00FF66] text-neutral-50 hover:bg-[#3cf385]") ||
//   (!isFilled &&
//     "bg-transparent border border-black border-opacity-50 text-black hover:text-opacity-50")
// }
