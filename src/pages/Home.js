import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import heroImg from "../assets/hero.jpg";
import valueImg from "../assets/value.jpg";
import benefitsImg from "../assets/benefits.jpg";
import SectionDivider from "../components/ui/SectionDivider";
import Hero from "../components/Hero";
import LogoRow from "../components/LogoRow";
export default function Home() {
  return (
    <div className="bg-white text-gray-800">
    <Hero />
    <LogoRow />

      {/* 🖼 Hero Section */}
{/* <section className="relative bg-white text-center py-24 md:py-28 px-6 text-gray-900 overflow-hidden border-b border-primary">

  {/* ✨ Fade Animation Wrapper */}
  {/* <div className="animate-fade-up max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-light font-serif leading-tight mb-4">
      Carriage <span className="font-script text-primary">Concierge</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-700 opacity-90 max-w-xl mx-auto">
      A luxury amenity for family-ready hospitality. Powered by BabyQuip.
    </p>  */}
{/* 
    <div className="mt-6">
      <Button text="Request a Pilot" variant="primary" />
    </div>

    <p className="text-sm mt-4 text-gray-500">Powered by BabyQuip</p>
  </div>

</section> */}
      {/* 💼 Challenge + Solution */}
      <Section
        kicker="The Opportunity"
        title="Today's Guests Expect More — Families Included"
        image={heroImg}
        imageAlt="Happy family arriving at luxury hotel"
        imagePosition="left"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Families are traveling more than ever, but most hotels aren’t equipped to welcome little guests with the same care. Carriage Concierge turns that challenge into a differentiator — with no added burden for your team.
        </p>
      </Section>
<SectionDivider />
      <Section
        kicker="The Solution"
        title="A Fully Managed, White-Glove Amenity Program"
        image={valueImg}
        imageAlt="Baby gear concierge delivery"
        imagePosition="right"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          We handle everything — from curated inventory and secure delivery to concierge-level guest support. All under your brand’s hospitality umbrella.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Our trusted partner BabyQuip is the engine. You’re the face of exceptional service.
        </p>
      </Section>
<SectionDivider />

      {/* ⭐ Benefits Teaser */}
      <Section
        kicker="Why Hotels Love It"
        title="Revenue, Satisfaction, and Peace of Mind"
        image={benefitsImg}
        imageAlt="Luxury hotel guest using baby gear"
        imagePosition="left"
      >
        <ul className="text-lg leading-relaxed list-disc list-inside text-gray-700 space-y-3">
          <li>💰 Share in every guest transaction — no overhead required</li>
          <li>🏆 Differentiate your brand in reviews and RFPs</li>
          <li>🛠 Fully managed by insured, vetted professionals</li>
        </ul>
        <div className="mt-8">
          <Button text="View Full Benefits" variant="outline" link="/benefits" />
        </div>
      </Section>

    </div>
  );
}