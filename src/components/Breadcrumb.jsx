import { NavLink } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-3 text-xs sm:text-sm text-black text-opacity-50">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center">
          {index !== 0 && "/"}
          {item.href ? (
            <NavLink to={item.href}>{item.label}</NavLink>
          ) : (
            <span className="text-opacity-0">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
