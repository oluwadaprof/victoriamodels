import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Apply from "../pages/apply/Apply";
import Contact from "../pages/contact/Contact";
import Models from "../pages/models/Models";

const CreateRoutes = () => (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="about" element={<About />} />
      <Route  path="apply" element={<Apply />} />
      <Route  path="contact" element={<Contact />} />
      <Route  path="models" element={<Models />} />
    </Routes>
);

export default CreateRoutes;
