import React, { createContext, useContext, useMemo, useState } from "react";

const ProfileStoreContext = createContext(null);

export function ProfileStoreProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    styleTone: "modern",          // modern | classic | boho | luxe
    lifestyle: "on-the-go",       // on-the-go | home-centric | travel-heavy
    nurseryStyle: "luxe-minimal", // luxe-minimal | warm-traditional | soft-boho | modern-scandi
    preferredColors: ["ivory", "blush"],
    gearPriorities: ["safety", "aesthetics"],
    notes: "",
  });

  const actions = useMemo(() => ({
    updateField: (key, value) =>
      setProfile((p) => ({ ...p, [key]: value })),
    toggleArrayValue: (key, value) =>
      setProfile((p) => {
        const set = new Set(p[key] || []);
        set.has(value) ? set.delete(value) : set.add(value);
        return { ...p, [key]: Array.from(set) };
      }),
    reset: () =>
      setProfile({
        name: "",
        email: "",
        styleTone: "modern",
        lifestyle: "on-the-go",
        nurseryStyle: "luxe-minimal",
        preferredColors: [],
        gearPriorities: [],
        notes: "",
      }),
  }), []);

  const value = useMemo(() => ({ profile, ...actions }), [profile, actions]);
  return (
    <ProfileStoreContext.Provider value={value}>
      {children}
    </ProfileStoreContext.Provider>
  );
}

export function useProfileStore() {
  const ctx = useContext(ProfileStoreContext);
  if (!ctx) throw new Error("useProfileStore must be used within ProfileStoreProvider");
  return ctx;
}