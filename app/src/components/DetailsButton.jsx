import React from "react";

const DetailsButton = ({ children, ...props }) => {
    return (
        <button className="DetailsButton" onClick={props.handleClick}>
            Details
        </button>
    );
};

export default DetailsButton;
