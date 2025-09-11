import React from "react";
import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import SectionDivider from "../components/ui/SectionDivider";
import Button from "../components/ui/Button";
import CTASection from "../components/CTASection";
import benefitsBizImg from "../assets/benefits.jpg";
import benefitsGuestImg from "../assets/benefits2.jpg";

export default function Benefits() {
  return (
    <div className="bg-white text-gray-800">
      <Hero subtitle="Clear gains. Zero friction." pageTitle="Benefits" />

      <Section
        kicker="Business Impact"
        title="Earn Revenue, Not Operational Load"
        image={benefitsBizImg}
        imageAlt="Hotel gear delivery"
        imagePosition="left"
      >
        <ul className="text-lg leading-relaxed list-disc list-inside text-gray-700 space-y-3">
          <li>Share revenue on every guest transaction</li>
          <li>Zero extra work—fully managed by BabyQuip</li>
          <li>Differentiate on OTAs and corporate RFPs</li>
          <li>First-mover advantage in your market</li>
        </ul>
      </Section>

      <SectionDivider />

      <Section
        kicker="Guest Experience"
        title="Families Leave Raving Reviews"
        image={benefitsGuestImg}
        imageAlt="Happy guests with baby gear"
        imagePosition="right"
      >
        <ul className="text-lg leading-relaxed list-disc list-inside text-gray-700 space-y-3">
          <li>Parents feel welcomed and cared for</li>
          <li>Safe, clean, on-site gear—sleep better</li>
          <li>Families become brand ambassadors</li>
          <li>Boosts NPS and guest satisfaction</li>
        </ul>
        <div className="mt-8">
          <Button text="How It Works" variant="primary" link="/how-it-works" />
        </div>
      </Section>

      <CTASection />
    </div>
  );
}