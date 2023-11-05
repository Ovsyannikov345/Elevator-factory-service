import React from "react";
import Order from "./Order";

import classes from "../styles/OrderList.module.css";

const OrderList = ({ orders, detailsHandler, deleteHandler }) => {
    return (
        <div className={classes.orderList}>
            {orders.map((order) => (
                <Order key={order.id} orderData={order} detailsHandler={detailsHandler} deleteHandler={deleteHandler} />
            ))}
        </div>
    );
};

export default OrderList;
