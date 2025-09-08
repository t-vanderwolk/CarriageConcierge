import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import heroImg from "../assets/hero.jpg";
import valueImg from "../assets/value.jpg";
import benefitsImg from "../assets/benefits.jpg";
import SectionDivider from "../components/ui/SectionDivider";
import Hero from "../components/Hero";
import LogoRow from "../components/LogoRow";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <LogoRow />

      {/* 🟡 Section: Challenge */}
      <Section
        kicker="The Opportunity"
        title="Today's Guests Expect More — Families Included"
        image={heroImg}
        imageAlt="Happy family arriving at luxury hotel"
        imagePosition="left"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Families are traveling more than ever, yet most hotels remain underprepared to serve their unique needs. Carriage Concierge helps your property transform that gap into a premium experience—without increasing your team’s workload.
        </p>
      </Section>

      <SectionDivider showArrow />

      {/* 🟡 Section: The Solution */}
      <Section
        kicker="The Solution"
        title="A Fully Managed, White-Glove Amenity Program"
        image={valueImg}
        imageAlt="Baby gear concierge delivery"
        imagePosition="right"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          We handle everything—from curated gear inventory and white-labeled fulfillment to end-to-end concierge support. Your brand delivers the magic; we power it behind the scenes.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          No new processes. No staff disruption. Just a thoughtful, family-focused touchpoint that elevates your property's reputation.
        </p>
      </Section>

      <SectionDivider showArrow />

      {/* 🟡 Section: Benefits Teaser */}
      <Section
        kicker="Why Hotels Love It"
        title="Revenue. Reputation. Zero Operational Burden."
        image={benefitsImg}
        imageAlt="Luxury hotel guest using baby gear"
        imagePosition="left"
      >
        <ul className="text-base leading-relaxed list-disc list-inside text-gray-700 space-y-4">
          <li>Share in every qualified guest transaction—no overhead or logistics required</li>
          <li>Enhance family-friendliness in reviews, OTAs, and corporate travel bids</li>
          <li>Maintain brand alignment with fully managed, insured, and professional service</li>
        </ul>
        <div className="mt-8">
          <Button text="Explore Full Benefits" variant="primary" link="/benefits" />
        </div>
      </Section>
      <CTASection />
    </div>
  );
}