import React from "react";

const Select = ({
  label,
  error,
  options = [],
  className = "",
  id,
  children,
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
        <select
          id={id}
          className={`
            block w-full rounded-xl text-sm border transition-all duration-200 bg-slate-50/50 px-4 py-2.5 appearance-none text-slate-800
            ${error
              ? "border-rose-300 focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/10"
              : "border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
            }
            ${className}
          `}
          {...props}
        >
          {children ? children : options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom Chevron Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-rose-600 font-medium" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
