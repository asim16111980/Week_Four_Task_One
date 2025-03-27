import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { state, dispatch } = useContext(MenusContext);
  return (
    <div>
      <ul className="flex flex-col bg-transparent md:flex-row md:gap-2 lg:gap-6 text-sm md:text-base">
        {["Home", "About", "Contact", "SignUp"].map((item) => (
          <li
            key={item}
            className="p-2 cursor-pointer"
            onClick={() => dispatch({ currentMenu: null })}
          >
            <NavLink
              to={(item === "Home" ? "/" : `/${item}`)}
              className={({ isActive }) =>
                `text-base text-black ${isActive ? "border-opacity-50 border-b border-black" : "border-b-0"}`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
