// import React, { createContext, useState } from "react";

// const MenusContext = createContext();

// // Function to open menu
// // const openMenu = (menus, currentMenu) => {
// //     return Object.fromEntries(
// //         Object.entries(menus).map(([key, value]) => key === currentMenu ? [key, !value] : [key, value = false])
// //     );
// // };
// // // Reducer function to handle state updates
// // const MenusReducer = (state, action) => {
// //     switch (action.currentMenu) {
// //         case null:
// //             state = { NavMenuOpened: false, CatsMenuOpened: false, UserMenuOpened: false };
// //             break;

// //         default: state = openMenu(state, action.currentMenu);
// //             break;
// //     }
// //     return state;
// // };

// const MenusProvider = ({ children }) => {
//     const [openedMenu, setOpenedMenu] = useState(null);
//     // Using useReducer for state management
//     // const [state, dispatch] = useReducer(MenusReducer, { NavMenuOpened: false, CatsMenuOpened: false, UserMenuOpened: false });

//     return (
//         <MenusContext.Provider value={[openedMenu, setOpenedMenu]}>
//             {children}
//         </MenusContext.Provider>
//     );
// };

// export { MenusContext, MenusProvider };

import React, { createContext, useState } from "react";

const MenusContext = createContext();

const MenusProvider = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(null); // حالة القائمة المفتوحة حاليًا

  // فتح قائمة معينة
  const openMenu = (menuName) => {
    setOpenedMenu(menuName);  // تعيين اسم القائمة المفتوحة
  };

  // إغلاق القائمة المفتوحة
  const closeMenu = () => {
    setOpenedMenu(null);  // إغلاق جميع القوائم
  };

  return (
    <MenusContext.Provider value={{ openedMenu, openMenu, closeMenu }}>
      {children}
    </MenusContext.Provider>
  );
};

export { MenusContext, MenusProvider };
