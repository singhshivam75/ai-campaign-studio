import React from "react";

const Textarea = ({
  label,
  error,
  rows = 4,
  className = "",
  id,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          {label}
        </label>
      )}
      <div className="relative rounded-xl shadow-xs">
        <textarea
          id={id}
          rows={rows}
          className={`
            block w-full rounded-xl text-sm border transition-all duration-200 bg-slate-50/50 px-4 py-2.5
            ${error
              ? "border-rose-300 text-rose-900 placeholder-rose-300 focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/10"
              : "border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
            }
            resize-y
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-rose-600 font-medium" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
