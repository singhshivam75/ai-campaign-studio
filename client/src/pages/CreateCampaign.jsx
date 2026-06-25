import React from "react";

const CreateCampaign = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Create AI Campaign</h1>
        <p className="text-slate-500 mt-1">Design and publish high-converting marketing campaigns using Gemini AI.</p>
      </div>

      <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-4">Campaign Parameters</h2>
        <div className="py-8 text-center text-slate-400">
          Campaign wizard form placeholder. (React Hook Form will be set up here)
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
