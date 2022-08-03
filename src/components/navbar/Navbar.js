import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link to="/about">About</Link>
      <Link to="/apply">Apply</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/models">Models</Link>
    </div>
  );
};

export default Navbar;
