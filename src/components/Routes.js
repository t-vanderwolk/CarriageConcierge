
// src/components/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import ProfileQuestionnaire from "../pages/ProfileQuestionnaire";
import ProfileReview from "../pages/ProfileReview";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/questionnaire" element={<ProfileQuestionnaire />} />
      <Route path="/profile/review" element={<ProfileReview />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}