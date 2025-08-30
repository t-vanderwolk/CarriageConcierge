import React from "react";
import { Section } from "../components/ui/Section";

function About() {
  return (
    <main className="bg-white">
      <Section title="About" center>
        <p className="text-slate-700 max-w-2xl mx-auto">
          The Carriage Concierge is a discreet, invitation‑only service for luxury baby gear and nursery design.
          We provide white‑glove consultations for families who value privacy, precision, and an elevated aesthetic.
        </p>
      </Section>
    </main>
  );
}

export default About;