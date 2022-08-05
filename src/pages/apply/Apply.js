import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Floatnav from "../../components/floatnav/Floatnav";

const Apply = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Floatnav />
      </div>
      Apply
      <Link to="/">go back</Link>
    </div>
  );
};

export default Apply;
