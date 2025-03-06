import React, { createContext, useReducer } from "react";

const MenusContext = createContext();

// Function to open menu
const openMenu = (menus, currentMenu) => {
    Object.entries(menus).forEach((item) => {
        item[0] != currentMenu ? item[1] = false : item[1] = true;
    })
    return state;
}
// Reducer function to handle state updates
const MenusReducer = (state, action) => {
    return openMenu(state, action.currentMenu) | state;
};

const MenusProvider = ({ children }) => {
    // Using useReducer for state management
    const [state, dispatch] = useReducer(MenusReducer, { NavMenuOpened: false, CatsMenuOpened: false, UserMenuOpened: false });

    return (
        <MenusContext.Provider value={{ state, dispatch }}>
            {children}
        </MenusContext.Provider>
    );
};

export { MenusContext, MenusProvider };