import React from 'react';
import { TokenProvider } from './auth/TokenContext';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff',
            contrastText: '#333',
        },
    },
});
console.log(theme);

const AppConfig = ({ children }) => (
    <ThemeProvider theme={theme}>
        <TokenProvider>
            {children}
        </TokenProvider>
    </ThemeProvider>
);

export default AppConfig;
