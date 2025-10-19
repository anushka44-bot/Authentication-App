import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="navbar-logo" />

      {userData ? (
        <div className="navbar-user-container" ref={dropdownRef}>
          <div
            className="navbar-user"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {userData.name[0].toUpperCase()}
          </div>

          {showDropdown && (
            <div className="navbar-dropdown">
              <ul className="navbar-list">
                {!userData.isAccountVerified && (
                  <li className="navbar-list-item">Verify email</li>
                )}

                <li className="navbar-list-item" onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => navigate("/login")} className="navbar-btn">
          Login <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
