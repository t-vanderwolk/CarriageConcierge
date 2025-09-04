import React from "react";
import Section from "../components/ui/Section";
import benefitsBizImg from "../assets/benefits.jpg";
import benefitsGuestImg from "../assets/benefits2.jpg";
import Button from "../components/ui/Button";
import SectionDivider from "../components/ui/SectionDivider";
export default function Benefits() {
  return (
    <div>

      {/* 📈 Business Benefits */}
      <Section
        kicker="Business Impact"
        title="Earn Revenue, Not Operational Load"
        image={benefitsBizImg}
        imageAlt="Hotel concierge handing gear to guest"
        imagePosition="left"
      >
        <ul className="text-lg list-disc list-inside text-gray-700 space-y-3">
          <li>💰 Share revenue on every guest transaction</li>
          <li>🛠 Zero extra work for your team — fully managed by BabyQuip</li>
          <li>✨ Differentiate on OTAs and corporate RFPs with family-ready status</li>
          <li>🏆 Gain first-mover advantage in your market</li>
        </ul>
      </Section>
<SectionDivider />

      {/* 👨‍👩‍👧 Guest Benefits */}
      <Section
        kicker="Guest Experience"
        title="Families Leave Raving Reviews"
        image={benefitsGuestImg}
        imageAlt="Smiling parents and baby in upscale hotel"
        imagePosition="right"
      >
        <ul className="text-lg list-disc list-inside text-gray-700 space-y-3">
          <li>💼 Parents feel welcome and cared for</li>
          <li>🛏 Guests sleep better knowing baby gear is safe, clean, and on-site</li>
          <li>📢 Families become brand evangelists in reviews and word-of-mouth</li>
          <li>🌟 Elevates NPS and guest satisfaction across family bookings</li>
        </ul>
        <div className="mt-6">
          <Button text="How It Works" variant="outline" link="/forhotels" />
        </div>
      </Section>

    </div>
  );
}