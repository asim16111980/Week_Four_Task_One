import Icon from "./Icon"

const CategoryPhone = ({img,title,style}) => {
    return (
        <div className={`flex flex-col items-center gap-2 border border-black border-opacity-30 rounded font-['poppins'] text-sm text-black hover:bg-[#DB4444] hover:text-white hover:shadow-sm hover:border-0 ${style}`}><img src={img} alt="Cell Phone" className="size-14 filter hover:invert" />
            <span>{title}</span></div>
    )
}

export default CategoryPhone