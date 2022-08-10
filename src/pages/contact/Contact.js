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
        <form>
          <input type="" name="" value=""/>
          <input type="" name="" value="" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
