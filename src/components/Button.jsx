
const Button = ({filled=true,style,value}) => {
  return (
      <button type="button" className={`rounded font-["poppins"] text-sm font-medium ${filled ? "bg-[#DB4444] text-[#FAFAFA] hover:bg-[#E07575]" : "bg-transparent border border-black border-opacity-50 text-black hover:text-opacity-50"} ${style}`}>{value }</button>
  )
}

export default Button