import React, { createContext, useReducer } from "react";

const MenusContext = createContext();

// Function to open menu
const openMenu = (menus, currentMenu) => {
    return Object.fromEntries(
        Object.entries(menus).map(([key, value]) => key === currentMenu ? [key, !value] : [key, value = false])
    );
};
// Reducer function to handle state updates
const MenusReducer = (state, action) => {
    switch (action.currentMenu) {
        case null:
            state = { NavMenuOpened: false, CatsMenuOpened: false, UserMenuOpened: false };
            break;

        default: state = openMenu(state, action.currentMenu);
            break;
    }
    return state;
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