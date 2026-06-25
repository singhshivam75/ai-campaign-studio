import React from "react";
import { FiBell, FiSettings, FiMenu } from "react-icons/fi";
import { SearchInput, Avatar } from "./ui";

const Navbar = ({ onMenuClick }) => {
  // Dummy user data
  const user = {
    name: "Shivam Singh",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-4 md:px-8 bg-white/80 backdrop-blur-md border-b border-slate-200">
      {/* Left Section: Menu Toggle (Mobile only) & Page Title or Quick Context */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Open sidebar"
        >
          <FiMenu className="w-5 h-5" />
        </button>
        <div className="hidden sm:block text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Workspace / AI Campaign Studio
        </div>
      </div>

      {/* Middle Section: Reusable Search Input */}
      <div className="flex-1 max-w-md mx-4 md:mx-8">
        <SearchInput placeholder="Search campaigns, leads... ⌘K" />
      </div>

      {/* Right Section: Notification, Settings & User Avatar */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notifications */}
        <button
          className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer group"
          aria-label="Notifications"
          onClick={() => alert("No new notifications")}
        >
          <FiBell className="w-5 h-5" />
          {/* Notification Badge Dot */}
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Settings */}
        <button
          className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Settings"
          onClick={() => alert("Settings panel mock")}
        >
          <FiSettings className="w-5 h-5" />
        </button>

        {/* Vertical Divider */}
        <div className="h-6 w-[1px] bg-slate-200 mx-1 hidden sm:block" />

        {/* User Profile using Reusable Avatar Component */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-sm font-semibold text-slate-700 leading-none">{user.name}</span>
            <span className="text-[11px] text-slate-400 font-medium mt-1">{user.role}</span>
          </div>
          <Avatar
            src={user.avatar}
            alt={user.name}
            showBadge={true}
            badgeColor="bg-emerald-500"
            size="md"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
