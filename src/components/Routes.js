import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import HowItWorks from "../pages/HowItWorks";
import Benefits from "../pages/Benefits";
import Partner from "../pages/Partner";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}