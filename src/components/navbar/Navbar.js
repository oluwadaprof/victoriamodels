import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  let isActive = ['home', 'about', 'apply', 'contact', 'model'];
  
  return (
    <nav>
      <div className="logo">VICTORIA OKAMA</div>
      <div>
        <NavLink
          to="/"
          style={isActive => ({
            color: isActive === '' ? "green" : "blue",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={(isActive) => ({
            color: isActive === ''  ? "green" : "blue",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/apply"
          style={(isActive) => ({
            color: isActive === '' ? "green" : "blue",
          })}
        >
          Apply
        </NavLink>
        <NavLink
          to="/contact"
          style={(isActive) => ({
            color: isActive === '' ? "green" : "blue",
          })}
        >
          Contact
        </NavLink>
        <NavLink
          to="/models"
          style={(isActive) => ({
            color: isActive ==='' ? "green" : "blue",
          })}
        >
          Models
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
