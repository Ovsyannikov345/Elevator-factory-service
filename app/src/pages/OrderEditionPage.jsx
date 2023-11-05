import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import OrderForm from "../components/UI/OrderForm/OrderForm";
import Footer from "../components/Footer";

import classes from "../styles/OrderEditionPage.module.css";

const OrderEditionPage = ({ orders, editHandler }) => {
    const params = useParams();
    const orderToEdit = orders.find(
        (order) => order.id === parseInt(params.id)
    );

    return (
        <div className={classes.orderEditionPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm orderData={orderToEdit} submitHandler={editHandler}>
                    Edit
                </OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderEditionPage;
