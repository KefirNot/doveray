import React, { useContext } from 'react';
import Auth from './auth/Auth';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import { TokenContext } from './auth/TokenContext';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const App = () => {
    const { token } = useContext(TokenContext);
    const classes = useStyles();

    const content = token
        ? <div>{token}</div>
        : <Auth />;

    return (
        <>
            <Helmet>
                <title>TOKEN RECEIVED</title>
            </Helmet>
            <div className={classes.container}>
                {content}
            </div>
        </>
    );
};

export default App;
