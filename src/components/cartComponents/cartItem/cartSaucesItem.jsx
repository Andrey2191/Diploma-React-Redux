import React from "react";
import Button from "../../common/button/Button";
import minusLogo from "../../../assets/img/minus.svg";
import plusLogo from "../../../assets/img/plus.svg";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import classNames from "classnames";

const CartSaucesItem = ({
  id,
  name,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
  imageUrl,
}) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className={classNames("cart__item")}>
      <div className={classNames("cart__item-img")}>
        <img
          className={classNames("pizza-block__image")}
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className={classNames("cart__item-info")}>
        <h3>{name}</h3>
      </div>
      <div className={classNames("cart__item-count")}>
        <div
          onClick={handleMinusItem}
          className={classNames(
            "button button--outline button--circle cart__item-count-minus"
          )}
        >
          <img src={minusLogo} alt="" />
        </div>
        <b>{totalCount}</b>
        <div
          onClick={handlePlusItem}
          className={classNames(
            "button button--outline button--circle cart__item-count-plus"
          )}
        >
          <img src={plusLogo} alt="" />
        </div>
      </div>
      <div className={classNames("cart__item-price")}>
        <b>{totalPrice} руб.</b>
      </div>
      <div className={classNames("cart__item-remove")}>
        <Button
          onClick={handleRemoveClick}
          className={classNames("button--circle btnClose")}
          outline
        >
          <IconContext.Provider value={{ color: "black", size: "25px" }}>
            <IoClose />
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
};

export default CartSaucesItem;
