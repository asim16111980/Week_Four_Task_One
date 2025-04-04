import { NavLink } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-3 text-xs sm:text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center gap-3">
          {item.href ? (
            <>
              <NavLink to={item.href} className="text-black text-opacity-50">
                {item.label}
              </NavLink>
              <span className="text-black text-opacity-50">/</span>
            </>
          ) : (
            <span className="text-black">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
