import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-wide text-rose-900">
          The Carriage Concierge
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
            <li><Link to="/about" className="hover:text-rose-700">About</Link></li>
            <li><Link to="/services" className="hover:text-rose-700">Services</Link></li>
            <li><Link to="/contact" className="hover:text-rose-700">Contact</Link></li>
          </ul>
          <Button to="/request-access" variant="primary">Request Access</Button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;