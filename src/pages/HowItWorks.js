import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import stepsImg from "../assets/steps.jpg";
import partnerImg from "../assets/partner.jpg";

export default function HowItWorks() {
  return (
    <div>

      {/* 🧭 Intro Section */}
      <Section
        kicker="How It Works"
        title="Your Team Stays Hands-Off. Your Guests Stay Impressed."
        image={stepsImg}
        imageAlt="Hotel staff with guest family"
        imagePosition="left"
      >
        <p className="text-lg text-gray-700">
          Carriage Concierge, powered by BabyQuip, makes implementation seamless. We handle everything—from guest booking to gear retrieval—while your brand earns the credit.
        </p>
      </Section>

      {/* 🪜 Process Timeline */}
      <section className="bg-light py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">Step-by-Step Simplicity</h2>
          <p className="text-lg text-gray-600">Here’s how it works from day one of partnership to your first delighted family guest.</p>
        </div>

        <ol className="space-y-12 max-w-3xl mx-auto">
          <li className="flex items-start gap-4">
            <span className="text-primary font-bold text-xl">1</span>
            <div>
              <h3 className="font-medium text-lg">Confirm Your Partnership</h3>
              <p className="text-gray-600">We align on your location(s), branding, and preferred gear availability.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-primary font-bold text-xl">2</span>
            <div>
              <h3 className="font-medium text-lg">Customize Guest Messaging</h3>
              <p className="text-gray-600">We provide copy, visuals, and digital assets for your team to deploy.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-primary font-bold text-xl">3</span>
            <div>
              <h3 className="font-medium text-lg">Go Live</h3>
              <p className="text-gray-600">Guests begin requesting gear via your branded touchpoints. We fulfill and deliver with white-glove service.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-primary font-bold text-xl">4</span>
            <div>
              <h3 className="font-medium text-lg">Earn and Repeat</h3>
              <p className="text-gray-600">You receive reporting and revenue share—no logistics required. Guests leave glowing reviews.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* 💼 Reassurance + CTA */}
      <Section
        kicker="Join Dozens of Leading Hotels"
        title="You Focus on Hospitality. We Handle the Rest."
        image={partnerImg}
        imageAlt="BabyQuip team at hotel"
        imagePosition="right"
      >
        <p className="text-lg text-gray-700 mb-4">
          Carriage Concierge is live in over 1,500 properties. The model is proven, insured, and supported by real humans. We're here to help you delight families effortlessly.
        </p>
        <Button text="Request a Pilot" variant="primary" link="/partnerships" />
      </Section>

    </div>
  );
}