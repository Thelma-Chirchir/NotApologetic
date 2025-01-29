// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import "./Pages.css";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">NotApologetic</h1>
      <div>
        <a href="#home" className="mx-4">
          Home
        </a>
        <a href="#Shop" className="mx-4">
          Shop
        </a>
        <a href="#about" className="mx-4">
          About
        </a>
        <a href="#contact" className="mx-4">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
