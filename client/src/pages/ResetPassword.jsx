import React, { useState } from "react";
import "./ResetPassword.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="reset-password-container">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="reset-password-logo"
      />

      <form className="reset-password-form">
        <h1 className="reset-password-title">Reset Password</h1>
        <p className="reset-password-text">
          Enter your registered email address
        </p>

        <div className="reset-password-input-wrapper">
          <img
            src={assets.mail_icon}
            alt="mail"
            className="reset-password-icon"
          />
          <input
            type="email"
            placeholder="Email id"
            className="reset-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="reset-password-btn">Submit</button>
      </form>
    </div>
  );
}

export default ResetPassword;
