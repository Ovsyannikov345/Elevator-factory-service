import React from 'react';
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";

import classes from "../styles/OrderForm.module.css";

const OrderForm = () => {
    return (
        <form className={classes.form}>
            <h2 className={classes.formHeader}>Create order</h2>
            <div className={classes.inputs}>
                <Input type="text" placeholder="Title" />
                <Input type="text" placeholder="Status" />
                <Input type="text" placeholder="Customer" />
                <Input type="text" placeholder="Complete time" />
                <Input type="text" placeholder="Description" />
            </div>
            <Button>Create</Button>
        </form>
    );
}

export default OrderForm;