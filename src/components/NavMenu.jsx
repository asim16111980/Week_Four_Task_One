// import { NavLink } from "react-router-dom";

// const NavMenu = () => {
//   return (
//     <nav
//       className={`w-full h-auto absolute top-0 left-0 z-20 px-2 md:gap-6 md:static text-black bg-white transition-all duration-300 ease-in-out shadow md:block md:shadow-none `}
//     >
//       <ul className="flex flex-col bg-transparent md:flex-row md:gap-2 lg:gap-6 text-sm md:text-base">
//         {["Home", "About", "Contact", "SignUp"].map((item) => (
//           <li
//             key={item}
//             className="p-2 cursor-pointer"
//             onClick={() => dispatch({ currentMenu: null })}
//           >
//             <NavLink
//               to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className={({ isActive }) =>
//                 `caret-transparent text-base text-black ${
//                   isActive
//                     ? "border-opacity-50 border-b border-black"
//                     : "border-b-0"
//                 }`
//               }
//             >
//               {item}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavMenu;

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";

const NavMenu = ({ className = "", onClose = null }) => {
  const handleClickLink = () => {
    onClose();
  };

  return (
    <nav
      className={`${className} w-full h-auto flex-1 sm:static text-black bg-white shadow sm:shadow-none`}
    >
      <ul className="flex flex-col bg-transparent sm:flex-row justify-center sm:items-center sm:gap-6 xl:gap-16 text-sm sm:text-base">
        {["Home", "About", "Contact", "SignUp"].map((item) => (
          <li
            key={item}
            className="p-2 cursor-pointer"
            onClick={handleClickLink}
          >
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `caret-transparent text-black ${
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
  );
};

export default NavMenu;
