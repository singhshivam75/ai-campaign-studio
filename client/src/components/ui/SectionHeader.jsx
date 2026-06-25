import React from "react";

const SectionHeader = ({ title, description, actions, className = "" }) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 ${className}`}>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight leading-none">{title}</h1>
        {description && <p className="text-slate-500 mt-2 text-sm leading-normal">{description}</p>}
      </div>
      {actions && (
        <div className="flex items-center gap-3 sm:self-center">
          {actions}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
