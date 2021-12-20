import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
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
      </div>
    </div>
  );
};

export default Login;
