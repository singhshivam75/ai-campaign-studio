import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Sidebar - Handles both Desktop collapsible state and Mobile Drawer overlay */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Layout Container */}
      <div
        className={`
          flex flex-col min-h-screen transition-all duration-300 ease-in-out
          ${isCollapsed ? "lg:pl-20" : "lg:pl-64"}
        `}
      >
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsMobileOpen(true)} />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8 max-w-7xl w-full mx-auto">
          {/* Renders the matching route's component */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
