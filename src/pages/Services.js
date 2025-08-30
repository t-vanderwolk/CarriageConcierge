import React from "react";
import { Section } from "../components/ui/Section";

function Services() {
  return (
    <main className="bg-white">
      <Section title="Services" center>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            "Personal shopping & registry curation",
            "Luxury nursery furniture & decor guidance",
            "CPST car seat education & coordination",
            "Private in‑home demos & stroller test drives",
            "White‑glove delivery & setup coordination",
            "Ongoing support and upgrade planning",
          ].map((item) => (
            <li key={item} className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
              <span className="text-slate-800">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

export default Services;