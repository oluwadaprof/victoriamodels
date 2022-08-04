import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <div>
     <Navbar/>
      <h1>contact</h1>
      <Link to="/">go back</Link>
    </div>
  );
};

export default Contact;
