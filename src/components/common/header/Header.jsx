import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout, removeUser } from "../../authorization/slice/userSlice";
import { useAuth } from "../../authorization/authorizationHook/use-auth";
import { useDispatch } from "react-redux";
import logoSvg from "../../../assets/img/pizza-logo.svg";
import Button from "../button/Button";
import cart from "../../../assets/img/cart.svg";
import classNames from "classnames";

function Header() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className={classNames("header")}>
      <div className={classNames("container")}>
        <Link to="/">
          <div className={classNames("header__logo")}>
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <div className={classNames("header__cart")}>
          <Link to="/cart">
            <Button className={classNames("button--cart")}>
              <span>{totalPrice} руб.</span>
              <div className={classNames("button__delimiter")}></div>
              <img width={20} src={cart} />

              <span>{totalCount}</span>
            </Button>
          </Link>
          <div className={classNames("logout")}>
            <span>{email}</span>
            <button
              className={classNames("btn--logout")}
              onClick={() => dispatch(logout())}
            >
              Выйти
            </button>
          </div>
          <Link to="/order">ORDER</Link>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Header;
