import React from "react";
import { Link } from "react-router-dom";
import Floatnav from "../../components/floatnav/Floatnav";
import Navbar from "../../components/navbar/Navbar";
import Model from "./model/Model";
import "./models.scss";

const Models = () => {
  return (
    <div className="model">
      <Navbar />
      <div className="model__content">
        <Floatnav />
        {/* <div className="model__content-container">
          <Model />
        </div> */}
      </div>
    </div>
  );
};

export default Models;
