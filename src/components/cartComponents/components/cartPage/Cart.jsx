import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cartEmptyImage from "../../../../assets/img/empty-cart.png";
import { CartItem, Button, SaucesCard } from "../../../index";

import { fetchSauces } from "../../../saucesComponents/containers/saucesSlice";
import { useAuth } from "../../../authorization/containers/authorizationHook/use-auth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";
import classNames from "classnames";
import CartSaucesItem from "../cartSaucesItem/cartSaucesItem";
import CartItemContainer from "../../containers/cartItem/CartItemContainer";

function Cart({
  onClearCart,
  onRemoveItem,
  onRemoveSaucesItem,
  onPlusItem,
  onPlusSaucesItem,
  onMinusItem,
  onMinusSaucesItem,
  handleAddSaucesToCart,
}) {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items, saucesItems } = useSelector(
    (state) => state.cart
  );
  const sauces = useSelector((state) => state.sauces.sauces);
  const { isAuth } = useAuth();

  React.useEffect(() => {
    dispatch(fetchSauces());
  }, [dispatch]);

  return (
    <div className={classNames("container container--cart")}>
      {totalCount ? (
        <div className={classNames("cart")}>
          <div className={classNames("cart__top")}>
            <h2 className={classNames("content__title")}>
              <AiOutlineShoppingCart />
              Корзина
            </h2>
            <div className={classNames("cart__clear")}>
              <IconContext.Provider value={{ color: "grey", size: "19px" }}>
                <BsTrash />
              </IconContext.Provider>

              <span onClick={onClearCart}>Очистить корзину</span>
            </div>
          </div>
          <div className={classNames("content__items")}>
            {Object.keys(items).map((key) => (
              <CartItemContainer
                key={key}
                id={items[key].id}
                imageUrl={items[key].imageUrl}
                name={items[key].name}
                type={items[key].type}
                size={items[key].size}
                totalPrice={items[key].totalPrice}
                totalCount={items[key].count}
                onRemove={() => onRemoveItem(key)}
                onMinus={() => onMinusItem(key)}
                onPlus={() => onPlusItem(key)}
              />
            ))}
            {Object.keys(saucesItems).map((key) => (
              <CartSaucesItem
                key={key}
                _id={saucesItems[key]._id}
                imageUrl={saucesItems[key].imageUrl}
                name={saucesItems[key].name}
                totalPrice={saucesItems[key].totalPrice}
                totalCount={saucesItems[key].count}
                onRemove={() => onRemoveSaucesItem(key)}
                onMinus={() => onMinusSaucesItem(key)}
                onPlus={() => onPlusSaucesItem(key)}
              />
            ))}
          </div>
          <span>Дополнительно</span>
          <div className={classNames("cart--sauces")}>
            {sauces &&
              sauces.map((obj) => (
                <SaucesCard
                  key={obj._id}
                  _id={obj._id}
                  name={obj.name}
                  imageUrl={obj.imageUrl}
                  price={obj.price}
                  onClickAddSauces={handleAddSaucesToCart}
                />
              ))}
          </div>
          <div className={classNames("cart__bottom")}>
            <div className={classNames("cart__bottom-details")}>
              <span>
                Всего : <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} руб.</b>
              </span>
            </div>

            <div className={classNames("cart__bottom-buttons")}>
              <a
                href="/"
                className={classNames(
                  "button button--outline button--add go-back-btn"
                )}
              >
                <Link to="/">
                  <span>Вернуться назад</span>
                </Link>
              </a>
              <Link to="/confirm">
                <Button className={classNames("pay-btn")}>
                  <span>Оплатить сейчас</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={classNames("cart cart--empty")}>
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartEmptyImage} alt="Empty cart" />
          <Link to="/" className={classNames("button button--black")}>
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
