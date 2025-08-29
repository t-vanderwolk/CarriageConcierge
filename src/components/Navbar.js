// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-white/90 backdrop-blur shadow-sm">
      <Link to="/" className="text-2xl md:text-3xl font-serif tracking-wide text-rose-900">
        The Carriage Concierge
      </Link>
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/about" className="hover:text-rose-600 transition-colors">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-rose-600 transition-colors">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-rose-600 transition-colors">Contact</Link>
        </li>
      </ul>
      <Link
        to="/request-access"
        className="ml-4 inline-flex items-center rounded-full px-4 py-2 text-sm md:text-base bg-rose-600 text-white shadow hover:bg-rose-700 transition-colors"
      >
        Request Access
      </Link>
    </nav>
  );
}

export default Navbar;