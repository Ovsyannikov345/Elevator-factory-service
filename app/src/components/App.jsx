import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrdersPage from "../pages/OrdersPage";
import OrderCreationPage from "../pages/OrderCreationPage";

const App = () => {
    return (
        <Routes>
            <Route path="/orders/create" element={<OrderCreationPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="*" element={<Navigate to="/orders" replace />} />
        </Routes>
    );
};

export default App;
