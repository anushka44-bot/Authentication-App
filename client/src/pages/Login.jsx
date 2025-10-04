import React, { useState } from "react";
import { assets } from "../assets/assets";
import "./Login.css";

function Login() {
  const [state, setState] = useState("Sign Up");

  return (
    <div className="login-container">
      <img src={assets.logo} alt="" className="logo" />
      <div className="login-box">
        <h2 className="login-heading">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p>
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account!"}
        </p>

        <form>
          {state === "Sign Up" && (
            <div className="form-input">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                placeholder="Full Name"
                required
                className="form-field"
              />
            </div>
          )}

          <div className="form-input">
            <img src={assets.mail_icon} alt="" />
            <input
              type="email"
              placeholder="Email id"
              required
              className="form-field"
            />
          </div>
          <div className="form-input">
            <img src={assets.lock_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              required
              className="form-field"
            />
          </div>
          <p>Forgot password?</p>

          <button className="login-btn">{state}</button>
        </form>

        {state === "Sign Up" ? (
          <p className="auth-text">
            Already have an account?{" "}
            <span onClick={() => setState("Login")} className="auth-link">
              Login here
            </span>
          </p>
        ) : (
          <p className="auth-text">
            Don't have an account?
            <span onClick={() => setState("Sign Up")} className="auth-link">
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
