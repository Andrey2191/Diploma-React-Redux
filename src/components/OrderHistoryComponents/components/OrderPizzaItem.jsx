import React from "react";
import classNames from "classnames";

const OrderItem = ({
  _id,
  name,
  type,
  size,
  totalPrice,
  totalCount,
  imageUrl,
  count,
}) => {
  return (
    <div className={classNames("order__item")}>
      <div className={classNames("order__item-img")}>
        <img
          className={classNames("pizza-block__image")}
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className={classNames("order__item-info")}>
        <h3>{name}</h3>
        <p>
          {type} , {size}
        </p>
      </div>

      <div className={classNames("order__item-price")}>
        <b>{count} шт.</b>
      </div>

      <div className={classNames("order__item-price")}>
        <b>{totalPrice} руб.</b>
      </div>
    </div>
  );
};

export default OrderItem;
