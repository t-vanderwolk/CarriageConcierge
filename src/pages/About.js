import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import aboutImg from "../assets/about.jpg";
import babyquipImg from "../assets/babyquip.jpg";
import SectionDivider from "../components/ui/SectionDivider";
export default function About() {
  return (
    <div>

      {/* 🏛 Carriage Concierge Purpose */}
      <Section
        kicker="About Us"
        title="Carriage Concierge: Elevating the Family Experience"
        image={aboutImg}
        imageAlt="Luxury hotel family scene"
        imagePosition="left"
      >
        <p className="text-lg text-gray-700">
          Carriage Concierge is a white-glove amenity program crafted exclusively for the hospitality industry. We help hotels serve modern families with exceptional care — with zero lift for your operations team.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          From curated baby gear to seamless delivery and service, your brand becomes family-ready overnight.
        </p>
      </Section>
<SectionDivider />

      {/* 🤝 Powered by BabyQuip */}
      <Section
        kicker="Trusted Infrastructure"
        title="Powered by BabyQuip — The Leading Family Travel Platform"
        image={babyquipImg}
        imageAlt="BabyQuip team with gear"
        imagePosition="right"
      >
        <p className="text-lg text-gray-700">
          Carriage Concierge is built atop BabyQuip’s proven logistics engine. With over 35,000 five-star reviews and service in 1,500+ cities, BabyQuip ensures gear is clean, safe, and reliably delivered — every time.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Your hotel leverages this infrastructure under your brand — maintaining luxury, trust, and hospitality excellence.
        </p>
        <div className="mt-6">
          <Button text="Explore How It Works" variant="outline" link="/howitworks" />
        </div>
      </Section>

    </div>
  );
}