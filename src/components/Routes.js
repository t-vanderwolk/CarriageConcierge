// src/components/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ForHotels from "../pages/ForHotels";
import Partnerships from "../pages/Partnerships";

import Profile from "../pages/Profile";
import ProfileQuestionnaire from "../pages/ProfileQuestionnaire";
import ProfileReview from "../pages/ProfileReview";

// Optional legacy aliases
import About from "../pages/About";
import Services from "../pages/ForHotels";   // map /services -> ForHotels
import Contact from "../pages/Partnerships"; // map /contact  -> Partnerships

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Hotel-facing pages */}
      <Route path="/for-hotels" element={<ForHotels />} />
      <Route path="/partnerships" element={<Partnerships />} />

      {/* Legacy paths kept working */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Existing profile flow */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/questionnaire" element={<ProfileQuestionnaire />} />
      <Route path="/profile/review" element={<ProfileReview />} />

      {/* Catch-all */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}