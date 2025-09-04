// src/pages/ForHotels.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

/* ---------------- Mini In-Page Navigation (with Scrollspy) ---------------- */
function MiniNav() {
  const items = useMemo(
    () => [
      { label: "Why", href: "#why" },
      { label: "How", href: "#how" },
      { label: "Commercials", href: "#commercials" },
      { label: "Ops", href: "#ops" },
      { label: "Safeguards", href: "#safeguards" },
      { label: "Reporting", href: "#reporting" },
      { label: "FAQ", href: "#faq" },
    ],
    []
  );

  const [active, setActive] = useState(items[0].href);
  const observerRef = useRef(null);

  useEffect(() => {
    const sectionIds = items.map((i) => i.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const opts = {
      // rootMargin top equals sticky nav height (~56–64px) to trigger a bit earlier
      root: null,
      rootMargin: "-70px 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const io = new IntersectionObserver((entries) => {
      // Find the most visible section (highest intersectionRatio and isIntersecting)
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActive(`#${visible.target.id}`);
      }
    }, opts);

    sections.forEach((s) => io.observe(s));
    observerRef.current = io;

    return () => io.disconnect();
  }, [items]);

  // Smooth scroll with offset for sticky navbar
  const onClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const stickyOffset = 70; // adjust if your sticky bar differs
    const y = el.getBoundingClientRect().top + window.scrollY - stickyOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-20">
      <div className="cc-container flex flex-wrap justify-center gap-4 py-3 text-sm md:text-base">
        {items.map((item) => {
          const isActive = active === item.href;
          return (
        <a
  key={item.href}
  href={item.href}
  onClick={(e) => onClick(e, item.href)}
  className={`cc-link transition font-medium ${
    isActive
      ? "cc-link--active"
      : "text-neutral-700 hover:text-black"
  }`}
>
  {item.label}
</a>
          );
        })}
      </div>
    </nav>
  );
}

/* ------------------------ Clickable FAQ Item (Accordion) ------------------------ */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="cursor-pointer transition text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={open}
      >
        <h3 className="font-serif text-lg md:text-xl">{question}</h3>
        <span className="text-[#C9A24E] text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-neutral-700">{answer}</p>}
    </Card>
  );
}

/* ------------------------------------ Page ------------------------------------ */
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
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/partner" variant="primary">Request Partnership</Button>
            <Button as="a" href="/docs/Carriage-Concierge-One-Pager.pdf" variant="outline" download>
              Download One-Pager (PDF)
            </Button>
          </div>
          <div className="mt-6 h-px bg-[color:var(--cc-gold)]/40 w-24 mx-auto" />
        </div>
      </section>

      {/* Mini in-page navigation */}
      <MiniNav />

      {/* WHY THIS MATTERS */}
      <Section id="why" title="Elevate Family Travel — Seamlessly" center divider>
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
      <Section id="how" title="How It Works" center divider>
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
      <Section id="commercials" title="Commercial Models" center divider>
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

      {/* IMPLEMENTATION & OPERATIONS */}
      <Section id="ops" title="Implementation & Operations" center divider>
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

      {/* BRAND & GUEST SAFEGUARDS */}
      <Section id="safeguards" title="Brand & Guest Safeguards" center divider>
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

      {/* REPORTING & INSIGHTS */}
      <Section id="reporting" title="Reporting & Insights" center divider>
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
      <Section id="faq" title="Frequently Asked by Hotel Teams" center divider>
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