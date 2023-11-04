import React from "react";
import Order from "./Order";

const OrderList = ({ orders, detailsHandler }) => {
    return (
        <div className="OrderList">
            {orders.map((order) => (
                <Order key={order.id} orderData={order} detailsHandler={detailsHandler} />
            ))}
        </div>
    );
};

export default OrderList;
