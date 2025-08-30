import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-rose-50 text-gray-800">
        <Navbar />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <footer className="py-8 text-center text-sm text-gray-500 bg-white border-t border-rose-100">
          © {new Date().getFullYear()} The Carriage Concierge • Luxury Baby Gear & Nursery Services
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;