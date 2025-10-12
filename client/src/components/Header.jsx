import React from "react";
import { assets } from "../assets/assets";
import "./Header.css";
import { useContext } from "react";
import { AppContent } from "../context/AppContext";

function Header() {
  const { userData } = useContext(AppContent);

  return (
    <div className="header-container">
      <img src={assets.header_img} alt="" className="header-img" />
      <h1 className="header-title">
        Hey {userData?.name || "Developer"} !
        <img src={assets.hand_wave} alt="wave" className="wave-icon" />
      </h1>
      <h2 className="header-msg">Welcome to our app</h2>
      <p>
        Let's start with a quick product tour and we will have you up and
        running in no time!!
      </p>
      <button className="head-button">Get Started</button>
    </div>
  );
}

export default Header;
