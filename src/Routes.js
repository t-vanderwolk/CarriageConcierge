// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import RequestAccess from "./RequestAccess";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-access" element={<RequestAccess />} /> */}
    </Routes>
  );
}

export default AppRoutes;