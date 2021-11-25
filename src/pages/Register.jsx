import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../components/signUp/SignUp";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <SignUpForm />
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
