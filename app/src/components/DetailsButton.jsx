import React from "react";

import "../styles/DetailsButton.css";

const DetailsButton = ({ children, ...props }) => {
    return (
        <button className="DetailsButton" onClick={props.handleClick}>
            Details
        </button>
    );
};

export default DetailsButton;
