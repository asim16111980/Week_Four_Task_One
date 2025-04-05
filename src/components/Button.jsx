const Button = ({type="button", className = "", value="", icon = null, onClick=null }) => {
  return (
    <button
      type={type}
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