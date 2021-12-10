import React from "react";
import OrderHistory from "./OrderHistory";

export default function OrderPage() {
  return (
    <div className="history--page">
      <h1>Your order</h1>
      <OrderHistory />
    </div>
  );
}
