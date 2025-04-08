import { NavLink } from "react-router-dom";

const CategoryPhone = ({ img = "", title = "", href = "#" }) => {
  return (
    <div
      className={`w-44 h-36 mx-auto flex flex-col items-center justify-center cursor-grab gap-2 group border border-black border-opacity-30 rounded font-poppins text-sm text-black hover:bg-[#DB4444] hover:text-white hover:shadow-sm hover:border-0`}
    >
      <NavLink to={href}>
        <img src={img} alt={img}  className="filter group-hover:invert" />
      </NavLink>
      <span>{title}</span>
    </div>
  );
};

export default CategoryPhone;
