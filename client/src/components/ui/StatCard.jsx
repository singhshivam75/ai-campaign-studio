import React from "react";

const StatCard = ({
  name,
  value,
  change,
  changeType = "success", // success, warning, danger, neutral
  icon: Icon,
  iconBgColor = "bg-indigo-50",
  iconTextColor = "text-indigo-600",
  subtext = "vs previous period",
  className = "",
}) => {
  const badgeStyles = {
    success: "text-emerald-600 bg-emerald-50 border border-emerald-100",
    warning: "text-amber-600 bg-amber-50 border border-amber-100",
    danger: "text-rose-600 bg-rose-50 border border-rose-100",
    neutral: "text-slate-600 bg-slate-50 border border-slate-100",
  };

  return (
    <div className={`p-6 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-200 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{name}</p>
          <p className="text-3xl font-bold text-slate-800 mt-2 tracking-tight leading-none">{value}</p>
        </div>
        {Icon && (
          <div className={`p-3 rounded-xl ${iconBgColor} ${iconTextColor}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      {(change || subtext) && (
        <div className="mt-4 flex items-center gap-2">
          {change && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full select-none ${badgeStyles[changeType] || badgeStyles.success}`}>
              {change}
            </span>
          )}
          {subtext && (
            <span className="text-[11px] text-slate-400 font-medium">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;
