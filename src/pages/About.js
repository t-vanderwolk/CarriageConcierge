import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

export default function About() {
  return (
    <main className="bg-white text-black">
      <Section title="About Carriage Concierge" center divider>
        <div className="cc-container max-w-4xl mx-auto grid gap-6">
          <Card>
            <h3 className="font-serif text-xl">A Luxury Hospitality Partner</h3>
            <p className="mt-2">
              We enable hotels to offer effortless family comfort—curated strollers, car seats, and cribs presented to
              your standards. Carriage Concierge manages the guest experience and property alignment end-to-end.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Reliability at Scale</h3>
            <p className="mt-2">
              Our operations are powered discreetly by <span className="cc-accent">BabyQuip</span>, the trusted logistics engine behind inventory,
              sanitization, delivery, and retrieval in major markets.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Safety · Insurance · Cleaning</h3>
            <p className="mt-2">
              Gear is sanitized to hospitality-grade standards, safety-checked before each delivery, and covered by
              BabyQuip’s insurance programs where available.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}