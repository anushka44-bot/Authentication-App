import React from "react";
import { assets } from "../assets/assets";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center ">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />

      <button className="mr-10 flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all">
        Login <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
}

export default Navbar;
