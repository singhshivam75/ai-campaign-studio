import React from "react";
import Button from "./Button";

const EmptyState = ({
  icon: Icon,
  title = "No data found",
  description = "Get started by creating something new.",
  actionText,
  onActionClick,
  className = "",
}) => {
  return (
    <div className={`p-8 bg-white border border-slate-100 rounded-2xl shadow-sm text-center py-16 flex flex-col items-center justify-center ${className}`}>
      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
        {Icon ? <Icon className="w-6 h-6" /> : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-800 tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-slate-500 max-w-sm leading-relaxed">{description}</p>
      {actionText && onActionClick && (
        <div className="mt-6">
          <Button variant="primary" size="sm" onClick={onActionClick}>
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
