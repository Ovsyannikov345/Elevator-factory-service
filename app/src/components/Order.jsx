import React from "react";
import Button from "./UI/Button/Button";

import "../styles/Order.css";


const Order = ({ orderData, detailsHandler, deleteHandler }) => {
    return (
        <div className="Order">
            <div className="order-info">
                <p className="order-id">{orderData.id}</p>
                <p className="order-title">{orderData.title}</p>
                <p className="order-status">{orderData.status}</p>
            </div>
            <div className="order-buttons">
                <Button onClick={() => detailsHandler(orderData)}>Details</Button>
                <Button onClick={() => deleteHandler(orderData.id)}>Delete</Button>
            </div>
        </div>
    );
};

export default Order;
