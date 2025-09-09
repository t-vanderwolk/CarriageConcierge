import React from "react";
import Section from "../components/ui/Section";
import SectionDivider from "../components/ui/SectionDivider";
import Button from "../components/ui/Button";
import stepsImg from "../assets/steps.jpg";
import partnerImg from "../assets/partner.jpg";
import CTASection from "../components/CTASection";
import StepDiagram from "../components/StepDiagram";
import Hero from "../components/Hero";

export default function HowItWorks() {
  return (
    <div className="bg-white text-gray-800">
<Hero subtitle="You stay hands-off. We handle the rest." pageTitle="How It Works" />
      {/* 🛎 Intro Section */}
      <Section
        kicker="How It Works"
        title="You Stay Elegant. We Handle Every Detail."
        image={stepsImg}
        imageAlt="Hotel concierge assisting family"
        imagePosition="left"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Implementing Carriage Concierge is as seamless as your service standards. We blend with your brand to deliver a flawless guest experience—without touching your team’s workload.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          From guest inquiry to gear pickup, everything is managed quietly, professionally, and under your name.
        </p>
      </Section>

      <SectionDivider showArrow />
      <StepDiagram />

      {/* 🪜 Refined Step Timeline */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">An Elegant 4-Step Onboarding</h2>
          <p className="text-lg text-gray-600">Launch without friction. Delight families from day one.</p>
        </div>

        <ol className="space-y-12 max-w-2xl mx-auto">
          {[
            {
              step: "1",
              title: "Define the Experience",
              desc: "We align on your brand tone, guest touchpoints, and amenity goals—ensuring the program fits seamlessly into your guest flow.",
            },
            {
              step: "2",
              title: "Curate & Customize",
              desc: "Your concierge team receives branded assets, language, and guidance. All materials reflect your hotel’s prestige.",
            },
            {
              step: "3",
              title: "Quietly Go Live",
              desc: "Guests make requests pre-arrival or at check-in. Our trusted fulfillment team delivers, sets up, and removes—all under your brand.",
            },
            {
              step: "4",
              title: "Monitor, Refine, Share",
              desc: "You receive monthly performance updates, revenue share insights, and support—all while receiving guest praise and loyalty boosts.",
            },
          ].map(({ step, title, desc }) => (
            <li key={step} className="flex items-start gap-4">
              <span className="text-primary font-serif text-2xl font-light">{step}</span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-1 leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <SectionDivider />

      {/* 💼 Reassurance + CTA */}
      <Section
        kicker="Proven. Polished. Private Label."
        title="You Focus on Hospitality. We Handle the Rest."
        image={partnerImg}
        imageAlt="BabyQuip team at hotel"
        imagePosition="right"
      >
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Carriage Concierge is already trusted by over 1,500 premium properties. The platform is white-labeled, fully insured, and powered by BabyQuip—America’s largest family travel logistics partner.
        </p>
        <ul className="text-gray-700 text-base list-disc list-inside space-y-2 mb-6">
          <li>All services operate under your hotel’s brand and tone</li>
          <li>No operational lift—our team manages fulfillment and support</li>
          <li>Immediate guest value, long-term satisfaction impact</li>
        </ul>
        {/* <Button text="Request a Pilot" variant="primary" link="/partnerships" /> */}
      </Section>
<CTASection />
    </div>
  );
}