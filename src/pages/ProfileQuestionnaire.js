// src/pages/ProfileQuestionnaire.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";
import usePrefs from "../hooks/usePrefs";

function Chip({ selected, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm border transition-colors ${
        selected
          ? "bg-rose-600 text-white border-rose-600 shadow"
          : "bg-white text-rose-900 border-rose-200 hover:border-rose-400"
      }`}
    >
      {children}
    </button>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-slate-700">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-rose-300 text-rose-600 focus:ring-rose-300"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}

export default function ProfileQuestionnaire() {
  const navigate = useNavigate();
  const [info] = useBasicInfo();            // read basic info
  const [prefs, setPrefs] = usePrefs();     // read/write persisted prefs

  // Guard: ensure basic info exists
  useEffect(() => {
    if (!info.name || !info.email) navigate("/profile");
  }, [info, navigate]);

  const tones = ["Modern", "Classic", "Boho", "Luxe"];
  const lifestyles = ["On-the-go", "Home-centric", "Travel-heavy"];
  const roomStyles = ["Luxe Minimal", "Warm Traditional", "Soft Boho", "Modern Scandi"];
  const colorOptions = ["Ivory", "Blush", "Champagne", "Taupe", "Charcoal", "Navy"];

  const setField = (k, v) => setPrefs((s) => ({ ...s, [k]: v }));
  const toggleColor = (c) =>
    setPrefs((s) => {
      const set = new Set(s.colors || []);
      set.has(c) ? set.delete(c) : set.add(c);
      return { ...s, colors: Array.from(set) };
    });

  function handleInspiration(e) {
    const files = Array.from(e.target.files || []);
    const urls = files.map((f) => URL.createObjectURL(f));
    setPrefs((s) => ({ ...s, inspiration: [...(s.inspiration || []), ...urls] }));
    e.target.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/profile/review");
  }

  return (
    <main className="bg-white">
      <Section
        title={info.name ? `Welcome, ${info.name.split(" ")[0]}` : "Your Preferences"}
        kicker="Questionnaire"
        center
      >
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-8">
          {/* Style Tone */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Style Tone</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {tones.map((tone) => (
                <Chip
                  key={tone}
                  selected={prefs.styleTone === tone}
                  onClick={() => setField("styleTone", tone)}
                >
                  {tone}
                </Chip>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Lifestyle</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {lifestyles.map((life) => (
                <Chip
                  key={life}
                  selected={prefs.lifestyle === life}
                  onClick={() => setField("lifestyle", life)}
                >
                  {life}
                </Chip>
              ))}
            </div>
          </div>

          {/* Nursery Preferences */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Nursery Preferences</h3>
            <div className="mt-4 grid gap-4">
              <div>
                <label className="block text-slate-700 mb-2">Room Style</label>
                <div className="flex flex-wrap gap-3">
                  {roomStyles.map((room) => (
                    <Chip
                      key={room}
                      selected={prefs.nurseryStyle === room}
                      onClick={() => setField("nurseryStyle", room)}
                    >
                      {room}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-slate-700 mb-2">Preferred Colors</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {colorOptions.map((c) => (
                    <Checkbox
                      key={c}
                      label={c}
                      checked={(prefs.colors || []).includes(c)}
                      onChange={() => toggleColor(c)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration Upload */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Upload Inspiration</h3>
            <p className="text-slate-500 text-sm mt-1">
              Moodboards, rooms you love, fabrics, colors.
            </p>
            <label className="mt-4 block rounded-2xl border border-dashed border-rose-300 bg-rose-50/50 p-6 text-center cursor-pointer hover:bg-rose-50">
              <span className="text-sm text-rose-800">Click to upload images</span>
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleInspiration} />
            </label>
            {prefs.inspiration?.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {prefs.inspiration.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-rose-100 bg-white">
                    <img src={src} alt="inspo" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notes (optional) */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Notes (Optional)</h3>
            <textarea
              className="mt-3 w-full min-h-[120px] rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
              placeholder="Special requests, timelines, must-have brands…"
              value={prefs.notes || ""}
              onChange={(e) => setField("notes", e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="button" type="submit" variant="primary">
              Review & Confirm
            </Button>
            <Button to="/profile" variant="outline">
              Back to Profile
            </Button>
          </div>
        </form>
      </Section>
    </main>
  );
}