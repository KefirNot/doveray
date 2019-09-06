import React from 'react';
import Auth from './auth/Auth';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import VacancyList from './vacancies/VacancyList';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Helmet>
                <title>DOVERAY.RU</title>
            </Helmet>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        DOVERAY.RU
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="search">
                        <Search />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <VacancyList />
            </div>
        </div>
    );
};

export default App;
