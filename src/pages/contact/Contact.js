import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar";
import Floatnav from "../../components/floatnav/Floatnav";

const Contact = () => {
  return (
    <div className="contact" >
     <Navbar/>
     <div>
        <Floatnav />
      </div>
      {/* <h1>contact</h1>
      <Link to="/">go back</Link> */}
    </div>
  );
};

export default Contact;
