import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "./orderSlice";
import { useEffect } from "react";
import classNames from "classnames";
import { useAuth } from "../authorization/authorizationHook/use-auth";
import CartItem from "../cartComponents/cartItem/CartItem";
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

      {orders.map((order) => {
        if (order.email === email) {
          console.log(Object.values(order));
          return (
            <div className={classNames("orderCard")}>
              <div className={classNames("order-title")}>
                Ваш email: {order.email}
              </div>
              <div className={classNames("order-title")}>
                Заказ на имя {order.name}
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

              {order.pizzas.map((pizza) => {
                return (
                  <OrderItem
                    key={pizza.id}
                    id={pizza.id}
                    imageUrl={pizza.imageUrl}
                    name={pizza.name}
                    type={pizza.type}
                    size={pizza.size}
                    totalPrice={pizza.price}
                  />
                );
              })}
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
