// src/hooks/usePrefs.js
import { useEffect, useState } from "react";

const PREFS_KEY = "cc_prefs_v1";

export default function usePrefs() {
  const [prefs, setPrefs] = useState(() => {
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      return (
        JSON.parse(raw) || {
          styleTone: "Luxe",
          lifestyle: "On-the-go",
          nurseryStyle: "Luxe Minimal",
          colors: ["Ivory", "Blush", "Champagne"],
          inspiration: [],
          notes: "",
        }
      );
    } catch {
      return {
        styleTone: "Luxe",
        lifestyle: "On-the-go",
        nurseryStyle: "Luxe Minimal",
        colors: ["Ivory", "Blush", "Champagne"],
        inspiration: [],
        notes: "",
      };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  return [prefs, setPrefs];
}