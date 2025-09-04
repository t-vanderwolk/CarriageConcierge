import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import howImg from "../assets/how.jpg";
import modelsImg from "../assets/models.jpg";
import safetyImg from "../assets/safety.jpg";
import SectionDivider from "../components/ui/SectionDivider";
const navItems = [
  { label: "Why Now", id: "why" },
  { label: "How It Works", id: "how" },
  { label: "Models", id: "models" },
  { label: "Safety", id: "safety" },
  { label: "FAQ", id: "faq" },
];

export default function ForHotels() {
  return (
    <div>

      {/* 🧭 Sticky Mini-Nav */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <ul className="flex overflow-x-auto md:justify-center gap-6 text-sm font-medium px-4 py-3 whitespace-nowrap">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <ScrollLink
                to={id}
                smooth
                duration={400}
                spy
                offset={-100}
                activeClass="text-primary border-b-2 border-primary"
                className="cursor-pointer hover:text-primary transition-colors"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🎯 Content Sections */}

      <Element name="why">
        <Section
          kicker="Why Now"
          title="Your Competitors Are Already Positioning for Families"
          image={howImg}
          imageAlt="Hotel family guests"
          imagePosition="left"
        >
          <p className="text-lg text-gray-700">
            Family travel has surged. Hotels that welcome children professionally—not just tolerate them—see higher loyalty and word-of-mouth. Carriage Concierge lets you stand out with no added lift.
          </p>
        </Section>
      </Element>
<SectionDivider />

      <Element name="how">
        <Section
          kicker="How It Works"
          title="We Do the Heavy Lifting — You Get the Credit"
          image={modelsImg}
          imageAlt="Concierge gear delivery"
          imagePosition="right"
        >
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Guests request gear during booking or check-in</li>
            <li>BabyQuip fulfills, delivers, and picks up — 100% white-labeled</li>
            <li>Your brand appears generous, family-ready, and operationally smooth</li>
          </ul>
        </Section>
      </Element>
<SectionDivider />

      <Element name="models">
        <Section
          kicker="Commercial Models"
          title="Simple, Profitable, Zero-Risk"
          image={safetyImg}
          imageAlt="Revenue share discussion"
          imagePosition="left"
        >
          <p className="text-lg text-gray-700">
            Choose a revenue-share model or opt-in pilot. All logistics, liability, and customer service are handled by BabyQuip. You simply say “yes.”
          </p>
        </Section>
      </Element>
<SectionDivider />

      <Element name="safety">
        <Section
          kicker="Safety & Trust"
          title="Insured. Sanitized. Certified Pros."
          image={safetyImg}
          imageAlt="Safety protocol and equipment"
          imagePosition="right"
        >
          <ul className="text-lg list-disc list-inside text-gray-700 space-y-2">
            <li>All gear is safety-checked, sanitized, and quality-controlled</li>
            <li>Vetted providers with background checks and insurance</li>
            <li>Trusted by over 35,000 5-star families and 1,500+ hotel properties</li>
          </ul>
        </Section>
      </Element>
<SectionDivider />

      <Element name="faq">
        <Section
          kicker="FAQ"
          title="Answers to Common GM Questions"
          image={null}
          imageAlt=""
          imagePosition="left"
        >
          <ul className="space-y-4 text-gray-700 text-lg">
            <li><strong>Q:</strong> Can we pilot this in one location?<br/><strong>A:</strong> Yes, most hotels begin with a flagship property to validate fit.</li>
            <li><strong>Q:</strong> How fast can we go live?<br/><strong>A:</strong> Most hotels launch within 2 weeks after alignment.</li>
            <li><strong>Q:</strong> Who handles guest support?<br/><strong>A:</strong> 100% handled by BabyQuip — from gear requests to follow-up.</li>
          </ul>
          <div className="mt-6">
            <Button text="Request a Call" variant="primary" link="/partnerships" />
          </div>
        </Section>
      </Element>

    </div>
  );
}