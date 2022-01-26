import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../loginForm/Login";

export default function Login() {
  return (
    <div className={classNames("login--page")}>
      <h1>Войдите в учётную запись</h1>
      <LoginForm />
      <p>
        <Link className={classNames("btn-register")} to="/register">
          Зарегестрироваться
        </Link>
      </p>
    </div>
  );
}
