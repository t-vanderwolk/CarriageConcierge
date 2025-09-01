import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import RequestAccess from "./RequestAccess";
import Profile from "../pages/Profile";
import ProfileQuestionnaire from "../pages/ProfileQuestionnaire";
import ProfileReview from "../pages/ProfileReview";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-access" element={<RequestAccess />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/questionnaire" element={<ProfileQuestionnaire />} />
      <Route path="/profile/review" element={<ProfileReview />} />
    </Routes>
  );
}

export default AppRoutes;