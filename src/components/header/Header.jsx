import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";
import { useAuth } from "../authorization/authorizationHook/use-auth";
import { useDispatch } from "react-redux";
import logoSvg from "../../assets/img/pizza-logo.svg";
import Button from "../common/button/Button";
import OrderPage from "../OrderHistoryPage/OrderPage";
import cart from "../../assets/img/cart.svg";

function Header() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const { isAuth, email } = useAuth();

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} руб.</span>
              <div className="button__delimiter"></div>
              <img width={20} src={cart} />

              <span>{totalCount}</span>
            </Button>
          </Link>
          <div className="logout">
            <span>{email}</span>
            <button
              className="btn--logout"
              // onClick={() => dispatch(removeUser())}
            >
              Выйти
            </button>
          </div>
          <Link to="/order">ORDER</Link>
        </div>
      </div>
    </div>
    // ) : (
    //   ""
  );
}

export default Header;
