import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>By Signing_in, you agree to Amozon's Term and Condtions</p>
        <button className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
