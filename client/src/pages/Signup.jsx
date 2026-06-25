import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Pane - Branding Panel (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50 -ml-20 -mb-20" />

        <div className="relative flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-indigo-600 shadow-md">
            <HiSparkles className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">CampaignStudio</span>
        </div>

        <div className="relative max-w-md">
          <h2 className="text-4xl font-bold leading-tight">Create your campaign builder workspace.</h2>
          <p className="text-indigo-200 mt-4 text-sm leading-relaxed">
            Harness the power of Gemini AI to design copy, manage leads, and analyze campaign performance in a single workspace.
          </p>
        </div>

        <div className="relative text-xs text-indigo-200">
          &copy; 2026 AI Campaign Studio. All rights reserved.
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 lg:hidden mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
              <HiSparkles className="w-4.5 h-4.5" />
            </div>
            <span className="font-bold text-slate-800">CampaignStudio</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-800">Create account</h3>
          <p className="text-slate-500 text-sm mt-1.5">Get started with a free developer workspace.</p>

          <form onSubmit={handleSignUp} className="mt-8 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                placeholder="Shivam Singh"
                required
                className="w-full mt-2 px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Email address</label>
              <input
                type="email"
                placeholder="demo@campaignstudio.com"
                required
                className="w-full mt-2 px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full mt-2 px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all duration-200 shadow-md shadow-indigo-100 hover:shadow-lg cursor-pointer"
            >
              Get Started
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
