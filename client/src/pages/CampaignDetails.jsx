import React from "react";

const CampaignDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Campaign Details</h1>
        <p className="text-slate-500 mt-1">Detailed performance and generation logs for selected campaign.</p>
      </div>

      <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-4">Performance Insights</h2>
        <div className="py-8 text-center text-slate-400">
          Campaign statistics and logs placeholder.
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
