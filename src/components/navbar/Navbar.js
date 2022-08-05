import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState('home')
  
  return (
    <nav>
      <div className="logo">VICTORIA OKAMA</div>
      <div className='links'>
        <NavLink
          to="/"
          className='nav-link'
          // className={isActive === 'home' ? 'active' : 'not-active'}
          // onClick={()=>setIsActive('home')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className='nav-link'
          // className={isActive === 'about' ? 'active' : 'not-active'}
          // onClick={()=>setIsActive('about')}
        >
          About
        </NavLink>
        <NavLink
          to="/apply"
          className='nav-link'
          // style={(isActive) => ({
          //   color: isActive === '' ? "green" : "blue",
          // })}
        >
          Apply
        </NavLink>
        <NavLink
          to="/contact"
          className='nav-link'
          // style={(isActive) => ({
          //   color: isActive === '' ? "green" : "blue",
          // })}
        >
          Contact
        </NavLink>
        <NavLink
          to="/models"
          className='nav-link'
          // style={(isActive) => ({
          //   color: isActive ==='' ? "green" : "blue",
          // })}
        >
          Models
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
