import React from "react";

export function Button({ as: Tag = "button", to, href, variant = "primary", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300";
  const styles = {
    primary: "bg-rose-600 text-white hover:bg-rose-700 shadow",
    outline: "bg-white text-rose-900 border border-rose-200 hover:border-rose-400 hover:bg-rose-50",
    subtle: "bg-rose-100 text-rose-900 hover:bg-rose-200",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) return (<a href={href} className={cls} {...props}>{children}</a>);
  if (to) return (<a href={to} className={cls} {...props}>{children}</a>);
  return (<Tag className={cls} {...props}>{children}</Tag>);
}