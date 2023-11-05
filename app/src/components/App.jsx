import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrdersPage from "../pages/OrdersPage";
import OrderCreationPage from "../pages/OrderCreationPage";

const App = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const response = await fetch("./orders.json");
        const data = await response.json();

        setOrders(data.orders);
    };

    const createOrder = (orderData) => {
        var maxId;

        if (orders && orders.length > 0) {
            maxId = Math.max(...orders.map((order) => order.id));
        } else {
            maxId = 0;
        }

        const order = {
            id: maxId + 1,
            ...orderData,
            creationDate: new Date().toISOString().split("T")[0],
        };

        setOrders([...orders, order]);
    };

    const deleteOrder = (id) => {
        setOrders(orders.filter((order) => order.id !== id));
    };

    return (
        <Routes>
            <Route
                path="/orders/create"
                element={<OrderCreationPage createOrder={createOrder} />}
            />
            <Route
                path="/orders"
                element={
                    <OrdersPage orders={orders} deleteOrder={deleteOrder} />
                }
            />
            <Route path="*" element={<Navigate to="/orders" replace />} />
        </Routes>
    );
};

export default App;
