import Icon from "./Icon";

const CategoryPhone = ({ img,  name }) => {
  return (
    <div
      className={`w-44 h-36 mx-auto flex flex-col items-center justify-center gap-2 group border border-black border-opacity-30 rounded font-['poppins'] text-sm text-black hover:bg-[#DB4444] hover:text-white hover:shadow-sm hover:border-0`}
    >
      <Icon
        icon={img}
        width={56}
        height={56}
        className="filter group-hover:invert"
      />
      <span>{name}</span>
    </div>
  );
};

export default CategoryPhone;
