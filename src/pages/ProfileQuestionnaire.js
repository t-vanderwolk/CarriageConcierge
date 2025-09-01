// pages/ProfileQuestionnaire.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";

function Chip({ selected, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm border transition-colors ${
        selected
          ? "bg-black text-white border-black"
          : "bg-white text-black border-neutral-300 hover:border-black"
      }`}
    >
      {children}
    </button>
  );
}
function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-neutral-700">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-neutral-400 text-black focus:ring-neutral-400"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}

export default function ProfileQuestionnaire() {
  const navigate = useNavigate();
  const [info] = useBasicInfo();

  useEffect(() => {
    if (!info?.name || !info?.email) navigate("/profile");
  }, [info, navigate]);

  const PREFS_KEY = "cc_prefs_v1";
  const [prefs, setPrefs] = React.useState(() => {
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      return (
        JSON.parse(raw) || {
          styleTone: "Luxe",
          lifestyle: "On-the-go",
          nurseryStyle: "Luxe Minimal",
          colors: ["Ivory", "Blush", "Champagne"],
          notes: "",
          inspiration: [],
        }
      );
    } catch {
      return {
        styleTone: "Luxe",
        lifestyle: "On-the-go",
        nurseryStyle: "Luxe Minimal",
        colors: ["Ivory", "Blush", "Champagne"],
        notes: "",
        inspiration: [],
      };
    }
  });
  useEffect(() => {
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch {}
  }, [prefs]);

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
    <main className="bg-white text-black">
      <Section
        title={info?.name ? `Welcome, ${info.name.split(" ")[0]}` : "Your Preferences"}
        kicker="Questionnaire"
        center
      >
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-8">
          {/* Style Tone */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Style Tone</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {tones.map((t) => (
                <Chip key={t} selected={prefs.styleTone === t} onClick={() => setField("styleTone", t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Lifestyle</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {lifestyles.map((l) => (
                <Chip key={l} selected={prefs.lifestyle === l} onClick={() => setField("lifestyle", l)}>
                  {l}
                </Chip>
              ))}
            </div>
          </div>

          {/* Nursery Preferences */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Nursery Preferences</h3>
            <div className="mt-4 grid gap-4">
              <div>
                <label className="block text-neutral-700 mb-2">Room Style</label>
                <div className="flex flex-wrap gap-3">
                  {roomStyles.map((r) => (
                    <Chip key={r} selected={prefs.nurseryStyle === r} onClick={() => setField("nurseryStyle", r)}>
                      {r}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-neutral-700 mb-2">Preferred Colors</label>
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
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Upload Inspiration</h3>
            <p className="text-neutral-600 text-sm mt-1">Moodboards, rooms you love, fabrics, colors.</p>
            <label className="mt-4 block rounded-2xl border border-dashed border-neutral-400 bg-white p-6 text-center cursor-pointer hover:bg-neutral-50">
              <span className="text-sm text-neutral-700">Click to upload images</span>
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleInspiration} />
            </label>
            {prefs.inspiration?.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {prefs.inspiration.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                    <img src={src} alt="inspo" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Notes (Optional)</h3>
            <textarea
              className="mt-3 w-full min-h-[120px] rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
              placeholder="Special requests, timelines, must-have brands…"
              value={prefs.notes || ""}
              onChange={(e) => setField("notes", e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="button" type="submit" variant="primary">Review & Confirm</Button>
            <Button to="/profile" variant="outline">Back to Profile</Button>
          </div>
        </form>
      </Section>
    </main>
  );
}