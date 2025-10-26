import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { assets } from "../assets/assets";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const showLogin = localStorage.getItem("showLogin");
    if (showLogin === "true") {
      setState("Login");
      localStorage.removeItem("showLogin");
    }
  }, []);

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        // Login
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          // Show backend message, e.g., "Invalid Password"
          toast.error(data.message || "Invalid Password");
        }
      }
    } catch (error) {
      // Show backend error if available
      toast.error(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  };

  return (
    <div className="login-container">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="logo"
      />
      <div className="login-box">
        <h2 className="login-heading">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p>
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account!"}
        </p>

        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="form-input">
              <img src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email id"
              required
              className="form-field"
            />
          </div>
          <div className="form-input">
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="form-field"
            />
          </div>
          <p
            className="pass-forgot"
            onClick={() => navigate("/reset-password")}
          >
            Forgot password?
          </p>

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
