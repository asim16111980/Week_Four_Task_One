import React, { createContext, useReducer } from "react";

const MenusContext = createContext();

// Function to open menu
const openMenu = (menus, currentMenu) => {
    return Object.fromEntries(
        Object.entries(menus).map(([key, value]) => key === currentMenu ?[key, !value ] : [key,value = false])
    );
};
// Reducer function to handle state updates
const MenusReducer = (state, action) => {
    return openMenu(state, action.currentMenu);
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