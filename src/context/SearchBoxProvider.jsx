import React, { createContext, useState } from "react";

const MobileSearchBoxContext = createContext();

const SearchBoxProvider = ({ children }) => {
    // Using useState for state management
    const [isMobileSearchBoxOpened, setIsMobileSearchBoxOpened] = useState( false );

    return (
        <MobileSearchBoxContext.Provider value={{ isMobileSearchBoxOpened, setIsMobileSearchBoxOpened }}>
            {children}
        </MobileSearchBoxContext.Provider>
    );
};

export { MobileSearchBoxContext, SearchBoxProvider };