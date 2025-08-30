import React from "react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white/80 backdrop-blur">
      <Container className="py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} The Carriage Concierge · Luxury Baby Gear & Nursery Services · By Appointment Only
      </Container>
    </footer>
  );
}