import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "./orderSlice";
import { useEffect } from "react";
import classNames from "classnames";
import { useAuth } from "../authorization/authorizationHook/use-auth";
import { Redirect } from "react-router-dom";
import OrderItem from "./OrderItem";

export default function OrderPage() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  return isAuth ? (
    <div className="history--page">
      <div className={classNames("order-header")}>
        <h1>Ваши заказы</h1>
      </div>

      {orders.map((order, index) => {
        if (order.email === email) {
          return (
            <div key={index} className={classNames("orderCard")}>
              <div className={classNames("order-title")}>
                Ваш email: {order.email}
              </div>
              <div className={classNames("order-title")}>
                Заказ на имя: {order.name}
              </div>
              <div className={classNames("order-title")}>
                Номер телефона: {order.telephone}
              </div>
              <div className={classNames("order-title")}>
                Адрес доставки: {order.address}
              </div>
              <div className={classNames("order-title")}>
                Стоимость заказа: {order.cost} руб.
              </div>

              <div className={classNames("order-body")}>
                {Object.keys(order.pizzas).map((key) => (
                  <OrderItem
                    key={key}
                    id={order.pizzas[key].id}
                    imageUrl={order.pizzas[key].imageUrl}
                    name={order.pizzas[key].name}
                    type={order.pizzas[key].type}
                    size={order.pizzas[key].size}
                    totalPrice={order.pizzas[key].price}
                    count={order.pizzas[key].count}
                  />
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

// return (
//   <div className={classNames("orderCard")}>
//     <span>{order.email}</span>
//     <span>{order.name}</span>
//     <span>{order.telephone}</span>
//     <span>{order.address}</span>
//   </div>
// );
