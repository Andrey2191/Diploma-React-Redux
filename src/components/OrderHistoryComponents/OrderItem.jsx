import React from "react";
import classNames from "classnames";

const OrderItem = ({
  id,
  name,
  type,
  size,
  totalPrice,
  totalCount,
  imageUrl,
}) => {
  return (
    <div className="order__item">
      <div className="order__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="order__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>

      <div className="order__item-price">
        <b>{totalPrice} руб.</b>
      </div>
    </div>
  );
};

export default OrderItem;
