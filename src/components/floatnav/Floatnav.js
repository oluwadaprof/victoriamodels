import React from "react";
import "./floatnav.scss";
import { FaFacebookF } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Floatnav = () => {
  return (
    <div className="float-nav">
      <div className="icons-div">
        <FaFacebookF className="icon" />
        <RiInstagramFill className="icon" />
        <AiOutlineTwitter className="icon" />
        <BsLinkedin className="icon" />
        <NavLink to='/contact' className="message-icon">
          <BiMessageDots />
        </NavLink>
      </div>
    </div>
  );
};

export default Floatnav;
