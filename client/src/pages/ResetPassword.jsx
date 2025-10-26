import React, { useContext, useState } from "react";
import "./ResetPassword.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

function ResetPassword() {
  const { backendUrl } = useContext(AppContent);
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState(0);
  const [isEmailSent, setIsEmailSent] = useState("");
  const [isOtpSubmited, setIsOtpSubmited] = useState(false);

  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
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

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-reset-otp",
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(error.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitOTP = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmited(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/reset-password",
        { email, otp, newPassword }
      );

      if (data.success || data.message.includes("Password reset successful")) {
        toast.success(data.message);
        localStorage.setItem("showLogin", "true");
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="reset-password-container">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="reset-password-logo"
      />

      {/* enter email id*/}

      {!isEmailSent && (
        <form onSubmit={onSubmitEmail} className="reset-password-form">
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
      )}
      {/*reset pass otp*/}

      {!isOtpSubmited && isEmailSent && (
        <form onSubmit={onSubmitOTP} className="email-verify-form">
          <h1 className="email-verify-title">Reset Password OTP</h1>
          <p className="email-verify-text">
            Enter the 6-digit code sent to your email id.
          </p>
          <div className="email-verify-inputs" onPaste={handlePaste}>
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
          <button className="email-verify-btn">Submit</button>
        </form>
      )}

      {/*reset pass form*/}

      {isOtpSubmited && isEmailSent && (
        <form onSubmit={onSubmitNewPassword} className="reset-password-form">
          <h1 className="reset-password-title">New Password</h1>
          <p className="reset-password-text">Enter the new password</p>

          <div className="reset-password-input-wrapper">
            <img
              src={assets.lock_icon}
              alt="mail"
              className="reset-password-icon"
            />
            <input
              type="password"
              placeholder="Password"
              className="reset-password-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button className="reset-password-btn">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
