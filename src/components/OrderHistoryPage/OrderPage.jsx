import React from "react";
import OrderHistory from "./OrderHistory";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import { useEffect } from "react";
import OrderList from "./OrderList";
import classNames from "classnames";
import { objectOf } from "prop-types";

export default function OrderPage() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  return (
    <div className="history--page">
      <h1>Your order</h1>
      {/* <div className={classNames("orderCard")}> */}
      {/* {orders.map((order) => {
          return <div>{order}</div>;
        })}
      </div> */}
      {orders.map((order) => {
        // <span>{order.email}</span>;

        return (
          <div>
            <span>{order.email}</span>
            <span>{order.name}</span>
            <span>{order.telephone}</span>
            <span>{order.address}</span>
          </div>
        );
        // <OrderList
        //   key={order.id}
        //   userName={order.name}
        //   userEmail={order.email}
        //   userAddress={order.address}
        //   userTelephone={order.telephone}
        // />
      })}
    </div>
  );
}
