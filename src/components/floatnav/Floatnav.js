import React from "react";
import "./floatnav.scss";
import { FaFacebookF } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";

const Floatnav = () => {
  return (
    <div className="float-nav">
      <div className="icons-div" >
        <FaFacebookF className="icon"  />
        <FaFacebookF className="icon" />
        <FaFacebookF className="icon" />
        <FaFacebookF className="icon" />
        <div className="message-icon" >
          <BiMessageDots />
        </div>
      </div>
    </div>
  );
};

export default Floatnav;
