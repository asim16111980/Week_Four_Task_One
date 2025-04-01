// import { useContext } from "react";
// import { MenusContext } from "../context/MenusProvider";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Nav = ({isOpen,onClose}) => {
  // const { state, dispatch } = useContext(MenusContext);
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <nav
        className={`w-full h-auto px-2 md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow md:block md:shadow-none `}
      >
        <ul className="flex flex-col bg-transparent md:flex-row md:gap-2 lg:gap-6 text-sm md:text-base">
          {["Home", "About", "Contact", "SignUp"].map((item) => (
            <li
              key={item}
              className="p-2 cursor-pointer"
              onClick={() => dispatch({ currentMenu: null })}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `caret-transparent text-base text-black ${
                    isActive
                      ? "border-opacity-50 border-b border-black"
                      : "border-b-0"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Menu>
  );
};

export default Nav;
