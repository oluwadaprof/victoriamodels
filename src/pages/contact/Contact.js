import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Floatnav from "../../components/floatnav/Floatnav";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div>
        <Floatnav />
      </div>
      <div className="contact__container">
        <h1>Contact Me</h1>
        <form className="form" >
          <label>Name</label>
          <input type='text'  placeholder="Adeeko Tobiloba" />
          <label>Phone Number</label>
          <input type="text" placeholder="+234-81-2601-9796" />
          <label>Message</label>
          <textarea placeholder="Hi victoria" />
          <button type="submit" >Send</button>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
