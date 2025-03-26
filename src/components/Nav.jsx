import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { state, dispatch } = useContext(MenusContext);
  return (
    <div>
      <ul className="flex flex-col bg-transparent lg:flex-row lg:gap-6 text-sm md:text-base">
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
        {/* <li
          className="p-2 cursor-pointer"
          onClick={() => dispatch({ currentMenu: null })}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="p-2 cursor-pointer"
          onClick={() => dispatch({ currentMenu: null })}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className="p-2 cursor-pointer"
          onClick={() => dispatch({ currentMenu: null })}
        >
          <Link to="/about"> About</Link>
        </li>
        <li
          className="p-2 cursor-pointer"
          onClick={() => dispatch({ currentMenu: null })}
        >
          <Link to="/signup">Sign up</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
