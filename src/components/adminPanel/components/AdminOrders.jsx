import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../../OrderHistoryComponents/components/OrderPizzaItem";
import OrderSaucesItem from "../../OrderHistoryComponents/components/orderSaucesItem";
import { fetchOrder } from "../../OrderHistoryComponents/containers/orderSlice";
import classNames from "classnames";
import AdminSidebar from "./AdminSidebar";

export default function AdminOrders() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  return (
    <div className="admin__page">
      <AdminSidebar />
      <div className="admin__main-orders">
        <div className={classNames("order-header")}>
          <h1>Все заказы</h1>
        </div>

        {orders.map((order, index) => {
          return (
            <div key={index} className={classNames("orderCard")}>
              <div className={classNames("order-title")}>
                email: {order.email}
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
        })}
      </div>
    </div>
  );
}
