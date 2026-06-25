import React from "react";
import { HiSparkles } from "react-icons/hi2";

const Loader = ({ className = "", size = "md", text = "AI is thinking..." }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 text-center ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Gradient Circle */}
        <div className={`animate-spin rounded-full border-4 border-slate-100 border-t-indigo-600 border-r-violet-500 ${sizes[size]}`} />

        {/* Inner Pulsing AI Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-indigo-600 animate-pulse">
          <HiSparkles className={size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-7 h-7"} />
        </div>
      </div>
      {text && (
        <p className="mt-4 text-sm font-semibold text-slate-500 tracking-tight leading-none animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
