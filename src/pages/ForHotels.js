// src/pages/ForHotels.js
import React, { useState } from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

// FAQ item component
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="cursor-pointer transition text-left">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center"
      >
        <h3 className="font-serif text-lg md:text-xl">{question}</h3>
        <span className="text-[#C9A24E] text-xl">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-3 text-neutral-700">{answer}</p>}
    </Card>
  );
}

export default function ForHotels() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="cc-container py-20 md:py-24 text-center">
          <h1 className="font-serif tracking-wide text-4xl md:text-5xl cc-tight">
            A Turn-Key Family Amenity for Luxury Hotels
          </h1>
          <p className="mt-4 cc-lead text-neutral-300 max-w-2xl mx-auto">
            Offer premium cribs, strollers, and car seats as an on-brand amenity —
            <span className="text-[#C9A24E]"> with zero operational burden.</span>
          </p>
          <div className="mt-8">
            <Button to="/partner" variant="primary">Request Partnership</Button>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <Section title="Elevate Family Travel — Seamlessly" center divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">No Ops Burden</h3>
            <p className="mt-3 text-neutral-700">
              We handle storage, sanitization, deliveries, in-room installation, and retrieval—offsite and insured.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Premium Brands</h3>
            <p className="mt-3 text-neutral-700">
              Curated inventory (e.g., Nuna, UPPAbaby, Silver Cross, VEER) aligned to luxury hospitality standards.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Consistent Experience</h3>
            <p className="mt-3 text-neutral-700">
              Hotel-grade presentation, discreet service, and market playbooks that scale city-by-city.
            </p>
          </Card>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" center divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <p className="cc-kicker">Step 1</p>
            <h3 className="font-serif text-xl md:text-2xl mt-1">Amenity Menu</h3>
            <p className="mt-3 text-neutral-700">
              We configure a branded amenity menu and co-branded booking link; concierge or guests submit requests.
            </p>
          </Card>
          <Card className="text-center">
            <p className="cc-kicker">Step 2</p>
            <h3 className="font-serif text-xl md:text-2xl mt-1">White-Glove Delivery</h3>
            <p className="mt-3 text-neutral-700">
              Sanitized, safety-checked gear is delivered and installed in-room before arrival—fully insured.
            </p>
          </Card>
          <Card className="text-center">
            <p className="cc-kicker">Step 3</p>
            <h3 className="font-serif text-xl md:text-2xl mt-1">Pickup & Reset</h3>
            <p className="mt-3 text-neutral-700">
              We retrieve post-stay, sanitize, and reset. Your team doesn’t manage inventory, storage, or training.
            </p>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button to="/partner" variant="primary">Speak with Partnerships</Button>
        </div>
      </Section>

      {/* COMMERCIAL MODELS */}
      <Section title="Commercial Models" center divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Revenue Share</h3>
            <p className="mt-3 text-neutral-700">
              Commission on each booking; pricing calibrated to brand, seasonality, and market demand.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Fixed Amenity Fee</h3>
            <p className="mt-3 text-neutral-700">
              Predictable structure favored by flagships or brand-wide programs; optional minimums by market.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Hybrid</h3>
            <p className="mt-3 text-neutral-700">
              Blend models by stay length, suite tier, or family mix; tailored for portfolio strategies.
            </p>
          </Card>
        </div>
      </Section>

      {/* IMPLEMENTATION */}
      <Section title="Implementation & Operations" center divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Timeline</h3>
            <p className="mt-3 text-neutral-700">
              Typical pilot launches in 2–4 weeks: setup, brand approvals, concierge briefing, and go-live.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Concierge Workflow</h3>
            <p className="mt-3 text-neutral-700">
              Front desk or concierge uses the dedicated link; confirmations route to our team for fulfillment.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Housekeeping Alignment</h3>
            <p className="mt-3 text-neutral-700">
              We coordinate timing for delivery/pickup; no guest-room storage or staff assembly required.
            </p>
          </Card>
        </div>
      </Section>

      {/* SAFEGUARDS */}
      <Section title="Brand & Guest Safeguards" center divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Standards</h3>
            <p className="mt-3 text-neutral-700">
              Professional cleaning, safety checks, and hotel-grade presentation for every request.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Insurance</h3>
            <p className="mt-3 text-neutral-700">
              Fully insured operations; documentation available for your risk and legal teams.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Privacy</h3>
            <p className="mt-3 text-neutral-700">
              Discreet service with minimal guest data collection and brand-appropriate communications.
            </p>
          </Card>
        </div>
      </Section>

      {/* REPORTING */}
      <Section title="Reporting & Insights" center divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Usage & Mix</h3>
            <p className="mt-3 text-neutral-700">
              Monthly utilization by room type, gear category, length of stay, and family segment.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Financials</h3>
            <p className="mt-3 text-neutral-700">
              Commission statements and performance vs. baseline; optional roll-ups for portfolios.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl md:text-2xl">Guest Feedback</h3>
            <p className="mt-3 text-neutral-700">
              Structured feedback themes that correlate with satisfaction and review outcomes.
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Frequently Asked by Hotel Teams" center divider>
        <div className="max-w-4xl mx-auto grid gap-6">
          <FAQItem
            question="Do we need to store inventory?"
            answer="No. Inventory is stored and sanitized offsite. We deliver on schedule and retrieve after checkout."
          />
          <FAQItem
            question="How are safety and cleaning handled?"
            answer="Every item is professionally cleaned to hospitality-grade standards, safety-checked, and photographed pre-deployment."
          />
          <FAQItem
            question="How does billing work?"
            answer="Guests or the property can be the payer depending on your policy. Commissions are remitted monthly."
          />
        </div>
        <div className="mt-8 text-center">
          <Button to="/partner" variant="outline">Request a Sample Agreement</Button>
        </div>
      </Section>

      {/* CTA */}
      <Section center>
        <div className="cc-container text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl cc-tight">
            Offer a truly family-ready stay
          </h2>
          <p className="mt-3 text-neutral-700">
            Let’s pilot at one property—or launch across your brand.
          </p>
          <div className="mt-6">
            <Button to="/partner" variant="primary">Request Partnership Intro</Button>
          </div>
          <div className="mt-6 h-px bg-[color:var(--cc-gold)]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}