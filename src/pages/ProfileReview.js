// src/pages/ProfileReview.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";
import usePrefs from "../hooks/usePrefs";

export default function ProfileReview() {
  const navigate = useNavigate();
  const [info] = useBasicInfo();
  const [prefs] = usePrefs();

  // Guard: ensure basic info exists
  useEffect(() => {
    if (!info.name || !info.email) navigate("/profile");
  }, [info, navigate]);

  function handleConfirm() {
    alert("Thank you — a concierge will contact you shortly to arrange your private consultation.");
    // For demo this is enough. Later: post to backend / email service / CRM
  }

  return (
    <main className="bg-white">
      <Section
        title={info.name ? `${info.name.split(" ")[0]}’s Summary` : "Your Summary"}
        kicker="Review & Confirm"
        center
      >
        <div className="max-w-3xl mx-auto grid gap-6">
          {/* Contact Card */}
          <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-6">
            <h3 className="font-serif text-xl text-rose-900">Contact</h3>
            <p className="text-slate-700 mt-3"><strong>Name:</strong> {info.name || "—"}</p>
            <p className="text-slate-700"><strong>Email:</strong> {info.email || "—"}</p>
            {info.phone && <p className="text-slate-700"><strong>Phone:</strong> {info.phone}</p>}
            {info.dueDate && <p className="text-slate-700"><strong>Due date:</strong> {info.dueDate}</p>}
            <div className="mt-4">
              <Button to="/profile" variant="subtle">Edit Contact</Button>
            </div>
          </div>

          {/* Preferences Card */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Preferences</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-slate-700"><strong>Style tone:</strong> {prefs.styleTone || "—"}</p>
              <p className="text-slate-700"><strong>Lifestyle:</strong> {prefs.lifestyle || "—"}</p>
              <p className="text-slate-700"><strong>Nursery style:</strong> {prefs.nurseryStyle || "—"}</p>
              <p className="text-slate-700"><strong>Colors:</strong> {(prefs.colors || []).join(", ") || "—"}</p>
            </div>
            {prefs.notes ? (
              <div className="mt-3">
                <p className="text-slate-700"><strong>Notes:</strong></p>
                <p className="text-slate-700 text-sm mt-1">{prefs.notes}</p>
              </div>
            ) : null}
            <div className="mt-4">
              <Button to="/profile/questionnaire" variant="subtle">Edit Preferences</Button>
            </div>
          </div>

          {/* Inspiration Card */}
          {prefs.inspiration?.length > 0 && (
            <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-rose-900">Inspiration</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {prefs.inspiration.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-rose-100 bg-white">
                    <img src={src} alt="inspo" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <Button as="button" variant="primary" onClick={handleConfirm}>
              Request Private Consultation
            </Button>
            <Button to="/profile/questionnaire" variant="outline">
              Back to Preferences
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}