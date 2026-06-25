import React from "react";

const Badge = ({ children, variant = "info", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 select-none";

  const variants = {
    success: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    warning: "bg-amber-50 text-amber-700 border border-amber-100",
    danger: "bg-rose-50 text-rose-700 border border-rose-100",
    info: "bg-indigo-50 text-indigo-700 border border-indigo-100",
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant] || variants.info} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
