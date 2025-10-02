import React from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="navbar-logo" />

      <button
        onClick={() => {
          console.log("Login clicked");
          navigate("/login");
        }}
        className="navbar-btn"
      >
        Login <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
}

export default Navbar;
