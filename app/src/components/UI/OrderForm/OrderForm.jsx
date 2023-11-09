import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { TextField } from "@mui/material";

import classes from "./OrderForm.module.css";

const OrderForm = ({ children, orderData, submitHandler }) => {
    const [order, setOrder] = useState(
        orderData
            ? orderData
            : {
                  title: "",
                  status: "",
                  description: "",
                  customer: "",
                  completeTime: "",
              }
    );

    const router = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        submitHandler(order);
        setOrder({
            title: "",
            status: "",
            description: "",
            customer: "",
            completeTime: "",
        });

        router("/orders");
    };

    return (
        <form className={classes.form}>
            <h2 className={classes.formHeader}>{children} order</h2>
            <div className={classes.inputs}>
                <TextField
                    label="Title"
                    variant="outlined"
                    value={order.title}
                    onChange={(e) =>
                        setOrder({ ...order, title: e.target.value })
                    }
                />
                <FormControl>
                    <InputLabel id="status-select-label">Status</InputLabel>
                    <Select
                        labelId="status-select-label"
                        label="Status"
                        value={order.status}
                        onChange={(e) =>
                            setOrder({ ...order, status: e.target.value })
                        }
                    >
                        <MenuItem value="Waiting">Waiting</MenuItem>
                        <MenuItem value="In progress">In progress</MenuItem>
                        <MenuItem value="Complete">Complete</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Customer"
                    variant="outlined"
                    value={order.customer}
                    onChange={(e) =>
                        setOrder({ ...order, customer: e.target.value })
                    }
                />
                <TextField
                    label="Complete time"
                    variant="outlined"
                    value={order.completeTime}
                    onChange={(e) =>
                        setOrder({ ...order, completeTime: e.target.value })
                    }
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    rows="4"
                    value={order.description}
                    onChange={(e) =>
                        setOrder({ ...order, description: e.target.value })
                    }
                />
            </div>
            <Button variant="outlined" onClick={submit}>
                {children}
            </Button>
        </form>
    );
};

export default OrderForm;
