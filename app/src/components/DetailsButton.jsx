import React from "react";

const DetailsButton = ({ handleClick }) => {
    return (
        <button className="DetailsButton" onClick={handleClick}>
            Details
        </button>
    );
};

export default DetailsButton;
