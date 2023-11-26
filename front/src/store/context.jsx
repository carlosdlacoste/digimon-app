import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = (Component) => {
    const [isTokenTrue, setIsTokenTrue] = useState(null);

    return (
        <Context.Provider value={{ isTokenTrue, setIsTokenTrue }}>
        {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };