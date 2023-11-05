import React from "react";
import Button from "./UI/Button/Button";

import "../styles/Order.css";


const Order = ({ orderData, detailsHandler }) => {
    const showDetails = () => {
        detailsHandler(orderData);
    };

    return (
        <div className="Order">
            <div className="order-info">
                <p className="order-id">{orderData.id}</p>
                <p className="order-title">{orderData.title}</p>
                <p className="order-status">{orderData.status}</p>
            </div>
            <div className="order-buttons">
                <Button onClick={showDetails}>Details</Button>
            </div>
        </div>
    );
};

export default Order;
