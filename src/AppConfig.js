import React from 'react';
import { TokenProvider } from './auth/TokenContext';

const AppConfig = ({ children }) => (
    <TokenProvider>
        {children}
    </TokenProvider>
);

export default AppConfig;
