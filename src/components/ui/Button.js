import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, variant = "primary", link = "#" }) {
  const base = "px-6 py-3 rounded-lg font-medium inline-block transition";
  const styles = {
    primary: `${base} bg-primary text-white hover:bg-yellow-600`,
    outline: `${base} border border-primary text-primary hover:bg-primary hover:text-white`,
  };

  return <Link to={link} className={styles[variant]}>{text}</Link>;
}