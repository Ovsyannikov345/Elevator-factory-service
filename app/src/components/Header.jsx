import React from 'react';
import Navigation from './Navigation';

import classes from "../styles/Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.headerText}>Elevator factory</h1>
            <Navigation />
        </header>
    );
}

export default Header;