import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderForm from "../components/OrderForm";

import classes from "../styles/OrderCreationPage.module.css";

const OrderCreationPage = ({ createOrder }) => {
    return (
        <div className={classes.orderCreationPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm createHandler={createOrder} />
            </main>
            <Footer />
        </div>
    );
};

export default OrderCreationPage;
