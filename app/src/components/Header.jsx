import React from 'react';
import Navigation from './Navigation';

import "../styles/Header.css";

const Header = () => {
    return (
        <header className="Header">
            <h1>Elevator factory</h1>
            <Navigation />
        </header>
    );
}

export default Header;