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

const NavMenu = ({ onClose }) => {
  const { openMenu } = useContext(MenusContext);

  const handleClickLink = () => {
    onClose(); // إغلاق القائمة عند الضغط على رابط
  };

  return (
    <nav className="w-full h-auto absolute top-0 left-0 z-20 px-2 md:gap-6 md:static text-black bg-white transition-all duration-300 ease-in-out shadow md:block md:shadow-none">
      <ul className="flex flex-col bg-transparent md:flex-row md:gap-2 lg:gap-6 text-sm md:text-base">
        {["Home", "About", "Contact", "SignUp"].map((item) => (
          <li key={item} className="p-2 cursor-pointer" onClick={handleClickLink}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `caret-transparent text-base text-black ${
                  isActive ? "border-opacity-50 border-b border-black" : "border-b-0"
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
