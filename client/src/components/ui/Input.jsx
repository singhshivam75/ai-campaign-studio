import React from "react";

const Input = ({
  label,
  error,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  type = "text",
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
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <LeftIcon className="w-4 h-4" />
          </div>
        )}
        <input
          id={id}
          type={type}
          className={`
            block w-full rounded-xl text-sm border transition-all duration-200 bg-slate-50/50
            ${LeftIcon ? "pl-10" : "pl-4"}
            ${RightIcon ? "pr-10" : "pr-4"}
            ${error
              ? "border-rose-300 text-rose-900 placeholder-rose-300 focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/10"
              : "border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white"
            }
            py-2.5
            ${className}
          `}
          {...props}
        />
        {RightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
            <RightIcon className="w-4 h-4" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-rose-600 font-medium" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
