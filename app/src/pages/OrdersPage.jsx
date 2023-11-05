import React, { useState } from "react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";
import Footer from "../components/Footer";
import Modal from "../components/UI/Modal/Modal";
import OrderDetails from "../components/OrderDetails";

import classes from "../styles/OrdersPage.module.css";

const OrdersPage = ({ orders, deleteOrder }) => {
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

    const showOrderDetails = (order) => {
        setModalOrder(order);
        setModalActive(true);
    };

    return (
        <div className={classes.ordersPage}>
            <Modal visible={modalActive} setVisible={setModalActive}>
                <OrderDetails order={modalOrder} />
            </Modal>
            <Header />
            <main className={classes.main}>
                <h2 className={classes.pageHeader}>Orders</h2>
                <OrderList orders={orders} detailsHandler={showOrderDetails} deleteHandler={deleteOrder} />
            </main>
            <Footer />
        </div>
    );
};

export default OrdersPage;
