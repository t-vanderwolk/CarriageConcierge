// pages/ProfileReview.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";

export default function ProfileReview() {
  const navigate = useNavigate();
  const [info] = useBasicInfo();

  useEffect(() => {
    if (!info.name || !info.email) navigate("/profile");
  }, [info, navigate]);

  const PREFS_KEY = "cc_prefs_v1";
  let prefs = {};
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    prefs = raw ? JSON.parse(raw) : {};
  } catch {
    prefs = {};
  }

  function handleConfirm() {
    alert("Thank you — a concierge will contact you shortly to arrange your private consultation.");
  }

  return (
    <main className="bg-white text-black">
      <Section title={info.name ? `${info.name.split(" ")[0]}’s Summary` : "Your Summary"} kicker="Review & Confirm" center>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Contact</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-800">
              <p><strong>Name:</strong> {info.name || "—"}</p>
              <p><strong>Email:</strong> {info.email || "—"}</p>
              {info.phone && <p><strong>Phone:</strong> {info.phone}</p>}
              {info.dueDate && <p><strong>Due date:</strong> {info.dueDate}</p>}
            </div>
            <div className="mt-4">
              <Button to="/profile" variant="subtle">Edit Contact</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Preferences</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-800">
              <p><strong>Style tone:</strong> {prefs.styleTone || "—"}</p>
              <p><strong>Lifestyle:</strong> {prefs.lifestyle || "—"}</p>
              <p><strong>Nursery style:</strong> {prefs.nurseryStyle || "—"}</p>
              <p><strong>Colors:</strong> {(prefs.colors || []).join(", ") || "—"}</p>
            </div>
            {prefs.notes && (
              <div className="mt-3 text-neutral-800">
                <p><strong>Notes:</strong></p>
                <p className="text-sm mt-1">{prefs.notes}</p>
              </div>
            )}
            <div className="mt-4">
              <Button to="/profile/questionnaire" variant="subtle">Edit Preferences</Button>
            </div>
          </div>

          {prefs.inspiration?.length > 0 && (
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-serif text-xl">Inspiration</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {prefs.inspiration.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-neutral-200">
                    <img src={src} alt="inspo" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="button" variant="primary" onClick={handleConfirm}>Request Private Consultation</Button>
            <Button to="/profile/questionnaire" variant="outline">Back to Preferences</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}