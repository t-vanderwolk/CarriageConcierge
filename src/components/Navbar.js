// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-xl tracking-wide">
          Carriage Concierge
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="hover:text-neutral-300">About</Link>
          <Link to="/services" className="hover:text-neutral-300">Services</Link>
          <Link to="/contact" className="hover:text-neutral-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

// Example usage: import this Navbar at the top of App.js
// and wrap around your Routes component.