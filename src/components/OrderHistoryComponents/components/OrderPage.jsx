import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "../containers/orderSlice";
import { useEffect } from "react";
import classNames from "classnames";
import { useAuth } from "../../authorization/containers/authorizationHook/use-auth";
import OrderItem from "./OrderPizzaItem";
import OrderSaucesItem from "./orderSaucesItem";

export default function OrderPage() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const { email } = useAuth();
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  return (
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
                {order.pizzas.map((pizza) =>
                  Object.keys(pizza).map((key) => (
                    <OrderItem
                      key={key}
                      _id={pizza[key]._id}
                      imageUrl={pizza[key].imageUrl}
                      name={pizza[key].name}
                      type={pizza[key].type}
                      size={pizza[key].size}
                      totalPrice={pizza[key].price}
                      count={pizza[key].count}
                    />
                  ))
                )}
                {order.sauces.map((sauce) =>
                  Object.keys(sauce).map((key) => (
                    <OrderSaucesItem
                      key={key}
                      _id={sauce[key]._id}
                      imageUrl={sauce[key].imageUrl}
                      name={sauce[key].name}
                      totalPrice={sauce[key].totalPrice}
                      count={sauce[key].count}
                    />
                  ))
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
