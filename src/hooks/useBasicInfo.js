// src/hooks/useBasicInfo.js
import { useState, useEffect } from "react";
import { BASIC_INFO_KEY } from "../constants";

export default function useBasicInfo() {
  const [info, setInfo] = useState(() => {
    try {
      const raw = localStorage.getItem(BASIC_INFO_KEY);
      return raw ? JSON.parse(raw) : { name: "", email: "" };
    } catch {
      return { name: "", email: "" };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BASIC_INFO_KEY, JSON.stringify(info));
    } catch {}
  }, [info]);

  return [info, setInfo];
}