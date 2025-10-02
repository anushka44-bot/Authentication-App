import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero">
        <Header />
      </div>
    </div>
  );
}

export default Home;
