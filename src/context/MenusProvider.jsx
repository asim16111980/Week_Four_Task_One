import React, { createContext, useState } from "react";

const MenusContext = createContext();

const MenusProvider = ({ children }) => {
    const [openedMenu, setOpenedMenu] = useState(null);
    return (
        <MenusContext.Provider value={[openedMenu, setOpenedMenu]}>
            {children}
        </MenusContext.Provider>
    );
};

export { MenusContext, MenusProvider };

// import React, { createContext, useState } from "react";

// const MenusContext = createContext();

// const MenusProvider = ({ children }) => {
//   const [openedMenu, setOpenedMenu] = useState(null);     

//   const openMenu = (menuName) => {
//     setOpenedMenu(menuName);      
//   };

//   const closeMenu = () => {
//     setOpenedMenu(null);     
//   };

//   return (
//     <MenusContext.Provider value={{ openedMenu, openMenu, closeMenu }}>
//       {children}
//     </MenusContext.Provider>
//   );
// };

// export { MenusContext, MenusProvider };
// import React, { createContext, useState } from "react";

// const MenusContext = createContext();

// const MenusProvider = ({ children }) => {
//   const [openedMenu, setOpenedMenu] = useState(null);     

//   // فتح القائمة بناءً على الاسم
//   const openMenu = (menuName) => {
//     setOpenedMenu(menuName);      
//   };

//   // غلق القائمة
//   const closeMenu = () => {
//     setOpenedMenu(null);     
//   };

//   // فتح/غلق القائمة بناءً على حالتها الحالية
//   const toggleMenu = (menuName) => {
//     setOpenedMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
//   };

//   return (
//     <MenusContext.Provider value={{ openedMenu, openMenu, closeMenu, toggleMenu }}>
//       {children}
//     </MenusContext.Provider>
//   );
// };

// export { MenusContext, MenusProvider };
