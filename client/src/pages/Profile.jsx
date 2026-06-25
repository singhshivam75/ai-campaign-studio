import React from "react";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">User Profile</h1>
        <p className="text-slate-500 mt-1">Configure your personal settings and workspaces.</p>
      </div>

      <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-4">Personal Details</h2>
        <div className="py-8 text-center text-slate-400">
          User profile and security configurations placeholder.
        </div>
      </div>
    </div>
  );
};

export default Profile;
