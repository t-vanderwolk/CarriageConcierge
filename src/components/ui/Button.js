import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, variant = "primary", link = "#" }) {
  const base = "px-6 py-3 rounded-lg font-medium inline-block transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: `${base} bg-[#C9A24E] text-white hover:bg-yellow-600 focus:ring-[#C9A24E]`,
    outline: `${base} border border-[#C9A24E] text-[#C9A24E] hover:bg-[#C9A24E]/10 hover:text-[#C9A24E] focus:ring-[#C9A24E]`,
  };

  return <Link to={link} className={styles[variant]}>{text}</Link>;
}