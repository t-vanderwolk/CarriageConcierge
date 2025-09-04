// src/components/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import HowItWorks from "../pages/HowItWorks";
import Benefits from "../pages/Benefits";
import Partnerships from "../pages/Partnerships";
import ForHotels from "../pages/ForHotels"; // ✅ new page

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/partner" element={<Partnerships />} />
      <Route path="/for-hotels" element={<ForHotels />} /> {/* ✅ new route */}
      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}