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

import { useContext } from "react";
import Menu from "./Menu";
import NavMenu from "./NavMenu";
import { MenusContext } from "../context/MenusProvider";

const Menus = () => {
  const { openedMenu, closeMenu } = useContext(MenusContext);

  // إظهار القائمة بناءً على الحالة المفتوحة
  const getOpenedMenu = () => {
    switch (openedMenu) {
      case "NavMenu":
        return <NavMenu onClose={closeMenu} />;
      default:
        return null;
    }
  };

  return (
    <>
      {openedMenu && (
        <>
          <div
            className="block absolute inset-0 z-10 bg-gray-400"
            onClick={closeMenu}
          ></div>
          <Menu isOpen={openedMenu} onClose={closeMenu}>
            {getOpenedMenu()}
          </Menu>
        </>
      )}
    </>
  );
};

export default Menus;

