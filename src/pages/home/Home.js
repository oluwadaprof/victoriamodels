import React from "react";
import Floatnav from "../../components/floatnav/Floatnav";
import Navbar from "../../components/navbar/Navbar";
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div>
        <Floatnav />
      </div>
    </div>
  );
};

export default Home;
