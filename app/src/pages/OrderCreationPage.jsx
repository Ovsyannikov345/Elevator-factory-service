import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import classes from "../styles/OrderCreationPage.module.css";
import OrderForm from "../components/OrderForm";

const OrderCreationPage = () => {
    return (
        <div className={classes.orderCreationPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm />
            </main>
            <Footer />
        </div>
    );
};

export default OrderCreationPage;
