// pages/Profile.js
import React from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

// Luxurious, tailored questionnaire with localStorage and curated previews
const STORAGE_KEY = "cc_profile_v1";

const defaultProfile = {
  name: "",
  email: "",
  styleTone: "luxe", // modern | classic | boho | luxe
  lifestyle: "on-the-go", // on-the-go | home-centric | travel-heavy
  nurseryStyle: "luxe-minimal", // luxe-minimal | warm-traditional | soft-boho | modern-scandi
  preferredColors: ["ivory", "blush", "champagne"],
  notes: "",
  inspiration: [], // local preview URLs
};

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

function useLocalProfile() {
  const [form, setForm] = React.useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultProfile;
    } catch (_) {
      return defaultProfile;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch (_) {}
  }, [form]);

  return [form, setForm];
}

function ProfileQuestionnaire() {
  const [form, setForm] = useLocalProfile();
  const setField = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const toggleColor = (c) =>
    setForm((s) => {
      const set = new Set(s.preferredColors);
      set.has(c) ? set.delete(c) : set.add(c);
      return { ...s, preferredColors: Array.from(set) };
    });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Preferences saved. (Locally on this device for now.)");
  }

  function handleInspiration(e) {
    const files = Array.from(e.target.files || []);
    const urls = files.map((f) => URL.createObjectURL(f));
    setForm((s) => ({ ...s, inspiration: [...(s.inspiration || []), ...urls] }));
    e.target.value = "";
  }

  const tones = [
    { v: "modern", l: "Modern" },
    { v: "classic", l: "Classic" },
    { v: "boho", l: "Boho" },
    { v: "luxe", l: "Luxe" },
  ];
  const lifestyles = [
    { v: "on-the-go", l: "On‑the‑go" },
    { v: "home-centric", l: "Home‑centric" },
    { v: "travel-heavy", l: "Travel‑heavy" },
  ];
  const roomStyles = [
    { v: "luxe-minimal", l: "Luxe Minimal" },
    { v: "warm-traditional", l: "Warm Traditional" },
    { v: "soft-boho", l: "Soft Boho" },
    { v: "modern-scandi", l: "Modern Scandi" },
  ];
  const colorOptions = ["ivory", "blush", "champagne", "taupe", "charcoal", "navy"];

  // Tailored curated preview (non-binding examples)
  function curatedPicks() {
    const picks = [];
    const luxe = form.styleTone === "luxe";
    const travel = form.lifestyle === "travel-heavy";
    const home = form.lifestyle === "home-centric";

    if (luxe && home) {
      picks.push({
        title: "Full‑Size Stroller + Bassinet",
        recs: ["UPPAbaby Vista V2", "Bugaboo Fox", "Silver Cross Wave"],
        why: "Elegant ride, bassinet option for at‑home naps, refined finishes.",
      });
    }
    if (luxe && travel) {
      picks.push({
        title: "Travel System & Compact Fold",
        recs: ["Cybex Priam + Cloud Q", "Nuna TRVL + PIPA rx", "Bugaboo Butterfly"],
        why: "Premium aesthetics with quick compact fold for flights and car service.",
      });
    }
    if (!travel) {
      picks.push({
        title: "All‑Terrain Option",
        recs: ["Thule Urban Glide", "VEER Switchback"],
        why: "Weekend trails and park days without sacrificing style.",
      });
    }

    // Nursery furniture hints
    if (form.nurseryStyle === "luxe-minimal") {
      picks.push({
        title: "Nursery — Luxe Minimal",
        recs: ["RH Baby & Child crib", "Oeuf dresser", "Bouclé glider"],
        why: "Clean lines, premium materials, soft layered neutrals (" +
          (form.preferredColors?.join(", ") || "neutrals") + ").",
      });
    }

    return picks;
  }

  const picks = curatedPicks();

  return (
    <Section title={form.name ? `Welcome, ${form.name.split(" ")[0]}` : "Your Preferences"} kicker="Questionnaire" center>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-8">
        {/* Identity (optional, for tailoring) */}
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl text-rose-900">Contact (Optional)</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
            />
            <input
              className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
            />
          </div>
        </div>

        {/* Style Tone */}
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-xl text-rose-900">Style Tone</h3>
            <p className="text-xs text-slate-500">Choose one</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {tones.map((t) => (
              <Chip key={t.v} selected={form.styleTone === t.v} onClick={() => setField("styleTone", t.v)}>
                {t.l}
              </Chip>
            ))}
          </div>
        </div>

        {/* Lifestyle */}
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-xl text-rose-900">Lifestyle</h3>
            <p className="text-xs text-slate-500">Choose one</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {lifestyles.map((t) => (
              <Chip key={t.v} selected={form.lifestyle === t.v} onClick={() => setField("lifestyle", t.v)}>
                {t.l}
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
                {roomStyles.map((r) => (
                  <Chip key={r.v} selected={form.nurseryStyle === r.v} onClick={() => setField("nurseryStyle", r.v)}>
                    {r.l}
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
                    label={c.charAt(0).toUpperCase() + c.slice(1)}
                    checked={form.preferredColors.includes(c)}
                    onChange={() => toggleColor(c)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inspiration Upload */}
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl text-rose-900">Upload Inspiration (Optional)</h3>
          <p className="text-slate-500 text-sm mt-1">Moodboard snapshots, rooms you love, fabrics, colors.</p>
          <label className="mt-4 block rounded-2xl border border-dashed border-rose-300 bg-rose-50/50 p-6 text-center cursor-pointer hover:bg-rose-50">
            <span className="text-sm text-rose-800">Click to upload images</span>
            <input type="file" accept="image/*" multiple className="hidden" onChange={handleInspiration} />
          </label>
          {form.inspiration?.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {form.inspiration.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-rose-100 bg-white">
                  <img src={src} alt="inspo" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Curated Picks Preview */}
        {picks.length > 0 && (
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Your Curated Picks (Preview)</h3>
            <p className="text-slate-500 text-sm mt-1">Tailored to your tone, lifestyle, and nursery style.</p>
            <div className="mt-4 grid gap-4">
              {picks.map((p) => (
                <div key={p.title} className="rounded-2xl border border-rose-100 p-4 bg-rose-50/50">
                  <h4 className="font-serif text-lg text-rose-900">{p.title}</h4>
                  <p className="text-slate-700 text-sm mt-1">{p.why}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.recs.map((r) => (
                      <span key={r} className="rounded-full px-3 py-1 text-xs bg-white border border-rose-200 text-rose-900">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button as="button" type="submit" variant="primary">Save Preferences</Button>
          <Button as="button" type="button" variant="outline" onClick={() => setForm(defaultProfile)}>Reset</Button>
        </div>
      </form>
    </Section>
  );
}

function Profile() {
  const [form] = useLocalProfile();
  return (
    <main className="bg-white">
      <Section title={form.name ? `${form.name.split(" ")[0]}’s Profile` : "Your Profile"} center>
        <div className="max-w-2xl mx-auto grid gap-6">
          <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-6">
            <h3 className="font-serif text-xl text-rose-900">Welcome</h3>
            <p className="text-slate-700 mt-2 text-sm">
              A private, luxury space crafted for you. Refine preferences, collect inspiration, and prepare for your bespoke consultation.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h4 className="font-serif text-lg text-rose-900">Next Steps</h4>
            <ul className="mt-3 list-disc list-inside text-slate-700 text-sm space-y-1">
              <li>Complete your style & lifestyle questionnaire</li>
              <li>Upload nursery inspiration to shape your curation</li>
              <li>Book your in‑home consultation</li>
            </ul>
          </div>
        </div>
      </Section>
      <ProfileQuestionnaire />
    </main>
  );
}

export default Profile;
