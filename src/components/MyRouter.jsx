import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "./Navbar";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
