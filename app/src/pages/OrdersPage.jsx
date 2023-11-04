import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";
import Footer from "../components/Footer";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const response = await fetch("./orders.json");
        const data = await response.json();

        setOrders(data.orders);
    };

    const showOrderDetails = (id) => {
        const order = orders.find((order) => order.id === id);

        console.log(
            `id: ${order.id} title: ${order.title} status: ${order.status}`
        );
    };

    return (
        <>
            <Header />
            <main>
                <OrderList orders={orders} detailsHandler={showOrderDetails} />
            </main>
            <Footer />
        </>
    );
};

export default OrdersPage;
