import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/login/Login";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
