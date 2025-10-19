import React, { useContext } from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="navbar-logo" />

      {userData ? (
        <div className="navbar-user">{userData.name[0].toUpperCase()}</div>
      ) : (
        <button
          onClick={() => {
            console.log("Login clicked");
            navigate("/login");
          }}
          className="navbar-btn"
        >
          Login <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
