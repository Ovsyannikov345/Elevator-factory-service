import React, { useState } from "react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";

const OrdersPage = () => {
    const [orders, setOrders] = useState([
        { id: "1", title: "test1", status: "in progress" },
        { id: "2", title: "test2", status: "complete" },
        { id: "3", title: "test3", status: "waiting" },
    ]);

    const showOrderDetails = (id) => {
        const order = orders.find(order => order.id === id);

        console.log(`id: ${order.id} title: ${order.title} status: ${order.status}`);
    }

    return (
        <>
            <Header />
            <main>
                <OrderList orders={orders} detailsHandler={showOrderDetails}/>
            </main>
        </>
    );
};

export default OrdersPage;
