import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";
import Footer from "../components/Footer";

import "../styles/OrdersPage.css";
import Modal from "../components/UI/Modal/Modal";
import OrderDetails from "../components/OrderDetails";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [modalOrder, setModalOrder] = useState({
        id: 1,
        title: "",
        status: "",
        creationDate: "",
        description: "",
        customer: "",
        completeTime: "",
    });

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const response = await fetch("./orders.json");
        const data = await response.json();

        setOrders(data.orders);
    };

    const showOrderDetails = (order) => {
        console.log(order);
        setModalOrder(order);
        setModalActive(true);
    };

    return (
        <div className="OrdersPage">
            <Modal visible={modalActive} setVisible={setModalActive}>
                <OrderDetails order={modalOrder} />
            </Modal>
            <Header />
            <main>
                <h2>Orders</h2>
                <OrderList orders={orders} detailsHandler={showOrderDetails} />
            </main>
            <Footer />
        </div>
    );
};

export default OrdersPage;
