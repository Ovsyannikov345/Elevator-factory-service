import React from "react";
import DetailsButton from "./DetailsButton";

import "../styles/Order.css";

const Order = ({ orderData, detailsHandler }) => {
    const showDetails = () => {
        detailsHandler(orderData.id);
    };

    return (
        <div className="Order">
            <div className="order-info">
                <p className="order-id">{orderData.id}</p>
                <p className="order-title">{orderData.title}</p>
                <p className="order-status">{orderData.status}</p>
            </div>
            <div className="order-buttons">
                <DetailsButton handleClick={showDetails}>Details</DetailsButton>
            </div>
        </div>
    );
};

export default Order;
