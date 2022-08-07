import React from "react";
import Floatnav from "../../components/floatnav/Floatnav";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="float-container">
        <Floatnav />
        <div className="first-section">
          <h1>
            VICTORIA <br /> <span>SMILES</span>
          </h1>
          <p className="location">LAGOS</p>
          <p>
            We are a modelling agency, showcasing
            <br />
            our self and brand to the world, we give this
            <br />
            platform to women who are really passionate of been a model
            <br />
          </p>
          <button>See more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
