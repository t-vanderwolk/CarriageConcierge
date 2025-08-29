// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
 import Contact from "../pages/Contact"
import RequestAccess from "../components/RequestAccess";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
     <Route path="/request-access" element={<RequestAccess />} /> 
    </Routes>
  );
}

export default AppRoutes;