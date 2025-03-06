import React, { createContext, useState } from "react";

const SearchBoxContext = createContext();

const SearchBoxProvider = ({ children }) => {
    // Using useState for state management
    const [isSearchBoxOpened, setIsSearchBoxOpened] = useState( false );

    return (
        <SearchBoxContext.Provider value={{ isSearchBoxOpened, setIsSearchBoxOpened }}>
            {children}
        </SearchBoxContext.Provider>
    );
};

export { SearchBoxContext, SearchBoxProvider };