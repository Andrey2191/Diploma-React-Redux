import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../registerForm/SignUp";

function Register() {
  return (
    <div className={classNames("login--form")}>
      <h1>Регистрация</h1>
      <SignUpForm />
      <p>
        У вас уже есть аккаунт?{" "}
        <Link className={classNames("btn-register")} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
