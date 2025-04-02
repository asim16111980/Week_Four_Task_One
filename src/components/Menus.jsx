// import Menu from "./Menu";
// import NavMenu from "./NavMenu";

// const Menus = ({ openedMenu }) => {
//   const getOpenedMenu = () => {
//     switch (openedMenu) {
//       case "NavMenu":
//         return <NavMenu />;

//       default:
//         return null;
//     }
//   };
//   return (
//     <>
//       {openedMenu && (
//         <>
//           <div className="block absolute size-full inset-0 z-10 bg-gray-400" onClick={}></div>
//           <Menu>{getOpenedMenu()}</Menu>
//         </>
//       )}
//     </>
//   );
// };

// export default Menus;

// import { useContext } from "react";
// import Menu from "./Menu";
// import NavMenu from "./NavMenu";
// import { MenusContext } from "../context/MenusProvider";

// const Menus = () => {
//   const { openedMenu, closeMenu } = useContext(MenusContext);

//   const getOpenedMenu = () => {
//     switch (openedMenu) {
//       case "NavMenu":
//         return <NavMenu />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {openedMenu && (
//         <>
//           <div
//             className="absolute size-full inset-0 z-10 bg-[#0b0b0b] bg-opacity-80"
//             onClick={closeMenu}
//           ></div>
//           <Menu isOpen={openedMenu} onClose={closeMenu}>
//             {getOpenedMenu()}
//           </Menu>
//         </>
//       )}
//     </>
//   );
// };

// export default Menus;

import { useContext, useMemo } from "react";
import Menu from "./Menu";
import NavMenu from "./NavMenu";
import CategoriesList from "./CategoriesList";
import { MenusContext } from "../context/MenusProvider";
import AccountDropdown from "./AccountDropdown";

const Menus = () => {
  const [openedMenu, setOpenedMenu] = useContext(MenusContext);
  const closeMenu = () => {
    setOpenedMenu(null);
  };

  const renderedMenu = useMemo(() => {
    switch (openedMenu) {
      case "NavMenu":
        return <NavMenu onClose={closeMenu} />;
      case "CatsMenu":
        return <CategoriesList onClose={closeMenu} />;
      case "UserMenu":
        //   return <AccountDropdown onClose={closeMenu} />;
        // default:
        return null;
    }
  }, [openedMenu]);

  return (
    <>
      {/* {(openedMenu === "NavMenu" || openedMenu === "CatsMenu") && (
        <div
          className={`absolute size-full inset-0 z-10 bg-[#0b0b0b] bg-opacity-80 transition-opacity duration-1000 ease-in-out ${
            openedMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          role="button"
          aria-label="Close menu"
        ></div>
      )}
      {renderedMenu && (
        <Menu
          isOpen={Boolean(openedMenu)}
          onClose={closeMenu}
          className={`absolute w-full top-0 left-0 z-20 bg-white transition-transform transition-opacity duration-1000 ease-in-out ${
            openedMenu
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-[-20px]"
          }`}
        >
          {renderedMenu}
        </Menu>
      )} */}
      {
        <div
          className={`${
            openedMenu === "NavMenu" || openedMenu === "CatsMenu"
              ? "scale-y-100"
              : "scale-y-0"
          } absolute inset-0 z-10 bg-[#0b0b0b] bg-opacity-80 transition-opacity duration-300 ease-in-out ${
            openedMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          role="button"
          aria-label="Close menu"
        ></div>
      }

      {
        <Menu
          isOpen={Boolean(openedMenu)}
          onClose={closeMenu}
          className={`
         absolute w-full top-0 left-0 z-20 bg-white transition-all duration-300 ease-in-out transform ${
           renderedMenu
             ? "opacity-100 translate-y-0"
             : "opacity-0 translate-y-[-20px]"
         }`}
        >
          {renderedMenu}
        </Menu>
      }
    </>
  );
};

export default Menus;
