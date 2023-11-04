import React from "react";
import DetailsButton from "./DetailsButton";

const Order = ({ orderData, detailsHandler }) => {
    const showDetails = () => {
        detailsHandler(orderData.id);
    };

    return (
        <div className="Order">
            <p className="order-id">{orderData.id}</p>
            <p className="order-title">{orderData.title}</p>
            <p className="order-status">{orderData.status}</p>
            <div className="order-buttons">
                <DetailsButton handleClick={showDetails}>Details</DetailsButton>
            </div>
        </div>
    );
};

export default Order;
