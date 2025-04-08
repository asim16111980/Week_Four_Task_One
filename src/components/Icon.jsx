import { NavLink } from "react-router-dom";

const Children = ({ icon, badgeCount = null }) => {
  return (
    <span className="size-full flex justify-center items-center relative transition-transform duration-300 ease-in-out">
      {icon && icon}
      {badgeCount > 0 && (
        <span className="w-4 h-4 absolute -top-1 left-3 flex items-center justify-center rounded-full bg-[#DB4444] text-neutral-50 text-xs">
          {badgeCount}
        </span>
      )}
    </span>
  );
};

const Icon = ({
  type = "button",
  onClick = null,
  href = "#",
  target = "",
  rel = "",
  icon,
  className = "",
  badgeCount = null,
}) => {
  return (
    <>
      {type === "button" ? (
        <button type="button" onClick={onClick} className={className}>
          <Children icon={icon} badgeCount={badgeCount} />
        </button>
      ) : (
        <NavLink to={href} target={target} rel={rel} className={className}>
          <Children icon={icon} badgeCount={badgeCount} />
        </NavLink>
        // <a href={href} target={target} rel={rel} className={className}>
        // </a>
      )}
    </>
  );
};

export default Icon;
