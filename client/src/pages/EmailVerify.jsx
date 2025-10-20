import React from "react";
import { assets } from "../assets/assets";
import "./EmailVerify.css";
import { useNavigate } from "react-router-dom";

function EmailVerify() {
  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if ((e.target.value.length > 0 && index < inputRefs.current, length - 1)) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (e.target.value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
        inputRefs.current[index - 1].value = "";
      } else {
        e.target.value = "";
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className="email-verify-container">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="email-verify-logo"
      />

      <form className="email-verify-form">
        <h1 className="email-verify-title">Email Verify OTP</h1>
        <p className="email-verify-text">
          Enter the 6-digit code sent to your email id.
        </p>
        <div className="email-verify-inputs">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                type="text"
                maxLength="1"
                key={index}
                required
                className="email-verify-input"
                ref={(e) => (inputRefs.current[index] = e)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
        </div>
        <button className="email-verify-btn">Verify Email</button>
      </form>
    </div>
  );
}

export default EmailVerify;
