import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import aboutImg from "../assets/about.jpg";
import babyquipImg from "../assets/babyquip.jpg";
import SectionDivider from "../components/ui/SectionDivider";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* 🏛 Mission & Purpose */}
      <Section
        kicker="About Carriage Concierge"
        title="Elevating the Family Experience in Luxury Hospitality"
        image={aboutImg}
        imageAlt="Luxury hotel family scene"
        imagePosition="left"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Carriage Concierge was created to help hotels meet the evolving expectations of today’s traveling families—without disrupting the operations of high-performing hospitality teams.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Our white-glove amenity program equips your property with everything it needs to feel family-ready overnight, while preserving your focus on core guest experiences.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          The result? A differentiated, memorable stay for your youngest guests—and added revenue, reputation, and loyalty for your brand.
        </p>
      </Section>

      <SectionDivider showArrow />

      {/* 🤝 Infrastructure */}
      <Section
        kicker="Trusted Infrastructure"
        title="Powered by BabyQuip—The Global Leader in Family Travel Logistics"
        image={babyquipImg}
        imageAlt="BabyQuip team with gear"
        imagePosition="right"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Our amenity is backed by BabyQuip: the most trusted name in baby gear delivery, with over 35,000 five-star reviews, vetted service providers, and operations in more than 1,500 cities.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Carriage Concierge overlays this proven logistics engine with your branding, tone, and guest experience standards—ensuring every family touchpoint feels like an extension of your hotel’s excellence.
        </p>
        <div className="mt-8">
          <Button text="Explore How It Works" variant="primary" link="/howitworks" />
        </div>
      </Section>
    </div>
  );
}