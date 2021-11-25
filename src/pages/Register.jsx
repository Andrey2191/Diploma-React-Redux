import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../components/signUp/SignUp";

function Register() {
  return (
    <div className="login--form">
      <h1>Регистрация</h1>
      <SignUpForm />
      <p>
        У вас уже есть аккаунт?{" "}
        <Link className="btn-register" to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
