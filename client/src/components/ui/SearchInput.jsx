import React, { useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
  showShortcut = true,
  ...props
}) => {
  const inputRef = useRef(null);

  // Focus shortcut listener (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`relative group w-full ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
        <FiSearch className="w-4 h-4" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-12 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-slate-800 placeholder-slate-400"
        {...props}
      />
      {showShortcut && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none select-none">
          <kbd className="hidden md:inline-flex items-center h-5 px-1.5 font-mono text-[10px] font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded-md">
            ⌘K
          </kbd>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
