import React from "react";
import Order from "./Order";

import "../styles/OrderList.css";

const OrderList = ({ orders, detailsHandler, deleteHandler }) => {
    return (
        <div className="OrderList">
            {orders.map((order) => (
                <Order key={order.id} orderData={order} detailsHandler={detailsHandler} deleteHandler={deleteHandler} />
            ))}
        </div>
    );
};

export default OrderList;
