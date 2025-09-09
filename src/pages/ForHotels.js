import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import howImg from "../assets/how.jpg";
import modelsImg from "../assets/models.jpg";
import businessImg from "../assets/hotelbenefits.png"
import safetyImg from "../assets/safety.jpg";
import whyImg from "../assets/with.png"
import Hero from "../components/Hero";
// import LogoRow from "../components/LogoRow";
import SectionDivider from "../components/ui/SectionDivider";
import CTASection from "../components/CTASection";

const navItems = [
  { label: "Why Now", id: "why" },
  { label: "How It Works", id: "how" },
  { label: "Models", id: "models" },
  { label: "Safety", id: "safety" },
  { label: "FAQ", id: "faq" },
];

export default function ForHotels() {
  return (
    <div className="bg-white text-gray-800">
      <Hero subtitle="Effortless to launch. Powerful to offer." pageTitle="For Hotels" />
      {/* <LogoRow /> */}

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

      {/* 🟡 Section: Why Now */}
      <Element name="why">
        <Section
          kicker="Why Now"
          title="Your Competitors Are Already Positioning for Families"
          image={whyImg}
          imageAlt="Hotel family guests"
          imagePosition="left"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Modern families represent one of the fastest-growing luxury travel segments. While most hotels still treat child guests as an afterthought, forward-looking properties are actively curating offerings to welcome them professionally and graciously.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Carriage Concierge positions your property as thoughtful, contemporary, and deeply hospitable—without increasing operational burden.
          </p>
        </Section>
      </Element>

      <SectionDivider showArrow />

      {/* 🟡 Section: How It Works */}
      <Element name="how">
        <Section
          kicker="How It Works"
          title="Seamless Service. Total Brand Alignment."
          image={howImg}
          imageAlt="Concierge gear delivery"
          imagePosition="right"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Your team remains hands-off. Guests request baby gear at booking or check-in; our white-labeled fulfillment network delivers, assembles, and retrieves—all under your brand name.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Each touchpoint feels tailored to your property’s tone and standards. Concierge scripts, service materials, and reporting are all branded and refined to suit your style of luxury.
          </p>
        </Section>
      </Element>

      <SectionDivider />

      {/* 🟡 Section: Commercial Models */}
      <Element name="models">
        <Section
          kicker="Commercial Models"
          title="Simple. Profitable. Risk-Free."
          image={businessImg}
          imageAlt="Revenue share discussion"
          imagePosition="left"
        >
          <ul className="text-base list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Revenue share:</strong> Earn a percentage from every transaction—no fees, setup costs, or contracts required.
            </li>
            <li>
              <strong>Pilot option:</strong> Begin with one flagship property to assess fit before expanding portfolio-wide.
            </li>
            <li>
              <strong>Fully managed:</strong> We handle the gear, delivery, fulfillment, and guest experience—your team stays focused.
            </li>
          </ul>
        </Section>
      </Element>

      <SectionDivider />

      {/* 🟡 Section: Safety */}
      <Element name="safety">
        <Section
          kicker="Safety & Trust"
          title="Certified. Insured. Parent-Tested."
          image={safetyImg}
          imageAlt="Safety protocol and equipment"
          imagePosition="right"
        >
          <ul className="text-base list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Sanitized and safe:</strong> All gear meets rigorous cleaning and inspection standards before and after each use.
            </li>
            <li>
              <strong>Certified providers:</strong> Each partner undergoes vetting, background checks, and training.
            </li>
            <li>
              <strong>Fully insured service:</strong> Guests and properties are protected at every step.
            </li>
          </ul>
        </Section>
      </Element>

      <SectionDivider />

      {/* 🟡 Section: FAQ */}
      <Element name="faq">
        <Section
          kicker="Frequently Asked"
          title="Answers to Common GM Questions"
          image={modelsImg}
          imageAlt="models image"
          imagePosition="left"
        >
          <ul className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <li>
              <strong>Q:</strong> Can we pilot this in one location?<br />
              <strong>A:</strong> Yes. Most partners begin with a flagship property and expand after validating results.
            </li>
            <li>
              <strong>Q:</strong> How soon can we go live?<br />
              <strong>A:</strong> Most implementations are completed in under two weeks—no internal training needed.
            </li>
            <li>
              <strong>Q:</strong> Who supports the guest?<br />
              <strong>A:</strong> Carriage Concierge, powered by BabyQuip, handles all guest interactions—seamlessly and professionally.
            </li>
          </ul>
          <div className="mt-8">
            <Button text="Request a Pilot" variant="primary" link="/partnerships" />
          </div>
        </Section>
      </Element>
      <CTASection />
    </div>
  );
}