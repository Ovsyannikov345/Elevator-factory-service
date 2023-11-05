import React from "react";

import classes from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a
                className={classes.footerLink}
                href="https://github.com/Ovsyannikov345"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
            <span className={classes.footerText}>&copy; 2023</span>
        </footer>
    );
};

export default Footer;
