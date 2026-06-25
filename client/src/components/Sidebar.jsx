import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiLayers,
  FiPlusSquare,
  FiUsers,
  FiUser,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiX
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const navigate = useNavigate();

  const navItems = [
    { path: "/", name: "Dashboard", icon: FiGrid },
    { path: "/campaigns", name: "Campaigns", icon: FiLayers },
    { path: "/create-campaign", name: "Create Campaign", icon: FiPlusSquare },
    { path: "/leads", name: "Leads", icon: FiUsers },
    { path: "/profile", name: "Profile", icon: FiUser },
  ];

  const handleLogout = () => {
    // Simulated logout
    alert("Simulated logout success!");
    navigate("/login");
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  // Content helper to avoid duplicating sidebar menu code
  const renderSidebarContent = (isMobile = false) => {
    const showFullText = isMobile || !isCollapsed;

    return (
      <div className="flex flex-col h-full bg-white border-r border-slate-200">
        {/* Header/Logo */}
        <div className={`flex items-center justify-between px-6 py-5 border-b border-slate-100 ${!showFullText && 'justify-center px-4'}`}>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
              <HiSparkles className="w-5 h-5 animate-pulse" />
            </div>
            {showFullText && (
              <span className="text-lg font-bold text-slate-800 tracking-tight leading-none">
                Campaign<span className="text-indigo-600">Studio</span>
              </span>
            )}
          </div>
          {isMobile && (
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => isMobile && setIsMobileOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group
                  ${isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                  ${!showFullText && "justify-center px-2 relative group"}
                `}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-105`} />
                {showFullText ? (
                  <span>{item.name}</span>
                ) : (
                  <span className="absolute left-16 px-2 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer/Logout */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-all duration-200 group cursor-pointer
              ${!showFullText && "justify-center px-2 relative"}
            `}
          >
            <FiLogOut className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            {showFullText ? (
              <span>Logout</span>
            ) : (
              <span className="absolute left-16 px-2 py-1.5 text-xs font-semibold text-white bg-rose-600 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md whitespace-nowrap">
                Logout
              </span>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden lg:block fixed inset-y-0 left-0 z-30 h-screen transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-20" : "w-64"}
        `}
      >
        {renderSidebarContent(false)}

        {/* Toggle Button for Desktop */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-6 -right-3 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:shadow-sm cursor-pointer transition-all duration-200"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <FiChevronRight className="w-3.5 h-3.5" /> : <FiChevronLeft className="w-3.5 h-3.5" />}
        </button>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Drawer Panel */}
          <div className="relative w-64 max-w-xs bg-white shadow-2xl flex flex-col h-full z-10">
            {renderSidebarContent(true)}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
