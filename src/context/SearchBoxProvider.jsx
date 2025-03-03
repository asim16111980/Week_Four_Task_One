import React, { createContext, useReducer } from "react";

const SearchBoxContext = createContext();

// Reducer function to handle state updates
const searchBoxReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { ...state, isSearchBoxOpened: !state.isSearchBoxOpened };
        default:
            return state;
    }
};

const SearchBoxProvider = ({ children }) => {
    // Using useReducer for state management
    const [state, dispatch] = useReducer(searchBoxReducer, { isSearchBoxOpened: false });

    return (
        <SearchBoxContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchBoxContext.Provider>
    );
};

export { SearchBoxContext, SearchBoxProvider };