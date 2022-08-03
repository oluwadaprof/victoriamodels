import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Apply from "../pages/apply/Apply";
import Contact from "../pages/contact/Contact";
import Models from "../pages/models/Models";

const createRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={<Home />} />
      <Route exact path="/about" component={<About />} />
      <Route exact path="/apply" component={<Apply />} />
      <Route exact path="/contact" component={<Contact />} />
      <Route exact path="/models" component={<Models />} />
    </Routes>
  </BrowserRouter>
);

export default createRoutes;
