import React from "react";
import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import SectionDivider from "../components/ui/SectionDivider";
import Button from "../components/ui/Button";
import CTASection from "../components/CTASection";

export default function Partnerships() {
  return (
    <div className="bg-white text-gray-800">
      <Hero subtitle="Start with a conversation." pageTitle="Partnerships" />

      <Section
        kicker="Let’s Explore a Partnership"
        title="Where Your Property Meets Family Travel Luxury"
        image={null}
        imagePosition="left"
      >
        <p className="text-lg leading-relaxed text-gray-700">
          We'd love to learn about your current operations, understand your needs, and explore whether Carriage Concierge is the right fit for your property. No automated demos—just a thoughtful, friendly conversation.
        </p>
      </Section>

      <SectionDivider />

      <Section
        kicker="Connect With Us"
        title="Tell Us About Your Property"
        image={null}
        imagePosition="right"
      >
        <form
          action="https://formspree.io/f/{your-form-id}" // ← Add your Formspree ID
          method="POST"
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
              Hotel / Property Name
            </label>
            <input
              type="text"
              name="hotel"
              id="hotel"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Optional Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="md:col-span-2">
            <Button text="Request a Pilot" variant="primary" link="/partnerships" />
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Your information is private—we’ll get back to you within 1–2 business days.
        </p>
      </Section>

      <CTASection />
    </div>
  );
}