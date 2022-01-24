import React from "react";
import OrderHistory from "./OrderHistory";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import { useEffect } from "react";
import OrderList from "./OrderList";
import classNames from "classnames";

export default function OrderPage() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  return (
    <div className="history--page">
      <h1>Your order</h1>
      <div className={classNames("orderCard")}>
        {orders.map((order) => {
          <div>{order.email}</div>;
          console.log(order.email);
          console.log(order.address);
          console.log(order.name);
          console.log(order.telephone);
          console.log(typeof orders);
        })}
      </div>
      {/* {orders.map((order) => {
        <span>{order.email}</span>;
        console.log(order.email);
        // <OrderList
        //   userName={order.name}
        //   userEmail={order.email}
        //   userAddress={order.address}
        //   userTelephone={order.telephone}
        // />;
      })} */}
    </div>
  );
}
