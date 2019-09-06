import React, { useState } from 'react';

export const TokenContext = React.createContext({});

const AUTH_TOKEN_KEY = 'authToken';

export const TokenProvider = ({ children }) => {
    const [stateToken, setStateToken] = useState(() => sessionStorage.getItem(AUTH_TOKEN_KEY));
    // const setSessionToken = (value) => {
    //     if (value == null) {
    //         sessionStorage.removeItem(AUTH_TOKEN_KEY);
    //         setStateToken(undefined);
    //     } else {
    //         sessionStorage.setItem(AUTH_TOKEN_KEY, value);
    //         setStateToken(value);
    //     }
    // };
    const tokenContextValue = { token: stateToken, setToken: setStateToken };
    return (
        <TokenContext.Provider value={tokenContextValue}>
            {children}
        </TokenContext.Provider>
    );
};
