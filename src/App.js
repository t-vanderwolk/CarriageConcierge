import React from "react";
import AppRoutes from "./components/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}