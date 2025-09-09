import React from "react";
import Section from "../components/ui/Section";
import benefitsBizImg from "../assets/benefits.jpg";
import benefitsGuestImg from "../assets/benefits2.jpg";
import benefitHotelImg from "../assets/hotelbenefits.png"
import Button from "../components/ui/Button";
import SectionDivider from "../components/ui/SectionDivider";
import CTASection from "../components/CTASection";

export default function Benefits() {
  return (
    <div className="bg-white text-gray-800">

      {/* 🏢 Business Benefits */}
      <Section
        kicker="For Owners & Operators"
        title="Drive Revenue. Reduce Friction. Elevate Perception."
        image={benefitHotelImg}
        imageAlt="Hotel concierge handing gear to guest"
        imagePosition="left"
      >
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Carriage Concierge offers a rare trifecta: incremental revenue, operational simplicity, and a differentiated guest experience. All without requiring any lift from your team.
        </p>
        <ul className="text-base list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Recurring revenue from families</strong> — Share in every transaction without taking on inventory, staffing, or management overhead.
          </li>
          <li>
            <strong>Zero operational burden</strong> — Housekeeping, front desk, and concierge teams remain focused. All logistics are handled externally.
          </li>
          <li>
            <strong>Family-readiness as a marketable asset</strong> — Stand out in corporate RFPs, OTAs, and brand audits by offering amenities most competitors lack.
          </li>
          <li>
            <strong>Built-in scalability</strong> — Expand from pilot to portfolio-wide implementation with no infrastructure investment or internal training.
          </li>
        </ul>
      </Section>

      <SectionDivider showArrow />

      {/* 👨‍👩‍👧 Guest Benefits */}
      <Section
        kicker="For Families"
        title="Deliver Comfort, Convenience, and Care — Effortlessly"
        image={benefitsGuestImg}
        imageAlt="Smiling parents and baby in upscale hotel"
        imagePosition="right"
      >
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Families today expect more from their hotel stay. Carriage Concierge helps properties meet those expectations with thoughtful, stress-reducing service — without compromising on brand standards.
        </p>
        <ul className="text-base list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Seamless, stress-free stays</strong> — Parents arrive to find the exact gear they requested—sanitized, safe, and already in-room.
          </li>
          <li>
            <strong>Trusted and insured service</strong> — Guests can rest easy knowing fulfillment is handled by certified professionals through BabyQuip’s national network.
          </li>
          <li>
            <strong>Stronger emotional connection</strong> — Guests feel seen, welcomed, and remembered—leading to better reviews, return stays, and referrals.
          </li>
          <li>
            <strong>Family loyalty across generations</strong> — A child’s positive experience today becomes a brand affinity story they tell for years.
          </li>
        </ul>
        <div className="mt-8">
          <Button text="See How It Works" variant="primary" link="/howitworks" />
        </div>
      </Section>
      <SectionDivider showArrow />

{/* 💎 Brand Impact */}
<Section
  kicker="Brand Impact"
  title="Position Your Property as Progressive, Caring, and Family-Ready"
  image={benefitsBizImg}
  imageAlt="Elegant hotel branding with family"
  imagePosition="left"
>
  <p className="text-lg leading-relaxed text-gray-700 mb-4">
    Carriage Concierge amplifies your property’s positioning in ways most amenities can’t: by signaling foresight, inclusion, and guest-centric thinking to both families and corporate partners.
  </p>
  <ul className="text-base list-disc list-inside text-gray-700 space-y-4">
    <li>
      <strong>Earn media exposure and brand goodwill</strong> — Stand out to parenting blogs, travel press, and high-value influencers with share-worthy family experiences.
    </li>
    <li>
      <strong>Convert family travelers into advocates</strong> — Parents share their delight in reviews, reels, and word-of-mouth, enhancing your online reputation.
    </li>
    <li>
      <strong>Strengthen internal culture of care</strong> — Staff and leadership feel proud of offering a program that genuinely improves lives—no upcharge in effort.
    </li>
    <li>
      <strong>Future-proof your offering</strong> — Position your hotel as a forward-thinking, inclusive destination in an increasingly family-conscious luxury market.
    </li>
  </ul>
  <div className="mt-8">
    <Button text="Request a Pilot" variant="primary" link="/partnerships" />
  </div>
</Section>
<CTASection />
    </div>
  );
}