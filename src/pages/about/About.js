import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Floatnav from "../../components/floatnav/Floatnav";
import './about.scss'

function About() {
  return (
    <div className="about" >
      <Navbar />
      <div>
        <Floatnav />
      </div>
      {/* <h1>About</h1> */}
      {/* <Link to="/">go back</Link> */}
    </div>
  );
}

export default About;
