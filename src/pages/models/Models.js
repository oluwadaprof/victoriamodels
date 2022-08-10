import React from "react";
import { Link } from "react-router-dom";
import Floatnav from "../../components/floatnav/Floatnav";
import Navbar from "../../components/navbar/Navbar";
import Model from "./model/Model";
import "./models.scss";

const Models = () => {
  return (
    <div className="models">
      <div className="top__nav-container">
        <Navbar />
      </div>
      <div className="model__content">
        <div className="model__content-container">
          <Model />
        </div>
        <div className="nav__container">
          <Floatnav />
        </div>
      </div>
    </div>
  );
};

export default Models;
