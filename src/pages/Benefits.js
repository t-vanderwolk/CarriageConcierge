import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

export default function Benefits() {
  return (
    <main className="bg-white text-black">
      <Section title="Benefits for Hotels" center divider>
        <div className="grid md:grid-cols-4 gap-6 cc-container max-w-5xl mx-auto">
          <Card>
            <h3 className="font-serif text-xl">Guest Satisfaction</h3>
            <p className="mt-2">Families feel cared for, return more often, and recommend your property.</p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Incremental Revenue</h3>
            <p className="mt-2">Commission on each booking with tiered menus that fit your market.</p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Zero Operational Lift</h3>
            <p className="mt-2">We handle inventory, sanitization, delivery, setup, and pickup.</p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Stand-Out Positioning</h3>
            <p className="mt-2">Differentiate in competitive markets with a true family-ready experience.</p>
          </Card>
        </div>
      </Section>
    </main>
  );
}