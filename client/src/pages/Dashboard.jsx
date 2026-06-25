import React from "react";
import { FiTrendingUp, FiUsers, FiCpu, FiTarget } from "react-icons/fi";
import { StatCard, EmptyState, SectionHeader } from "../components/ui";

const Dashboard = () => {
  // Dummy analytics numbers
  const stats = [
    {
      name: "Active Campaigns",
      value: "12",
      change: "+2 this week",
      changeType: "success",
      icon: FiTarget,
      iconBgColor: "bg-indigo-50",
      iconTextColor: "text-indigo-600",
    },
    {
      name: "Total Leads Generated",
      value: "1,482",
      change: "+18.2%",
      changeType: "success",
      icon: FiUsers,
      iconBgColor: "bg-emerald-50",
      iconTextColor: "text-emerald-600",
    },
    {
      name: "AI Computations",
      value: "348",
      change: "99.8%",
      changeType: "success",
      icon: FiCpu,
      iconBgColor: "bg-violet-50",
      iconTextColor: "text-violet-600",
    },
    {
      name: "Avg. Conversion Rate",
      value: "4.8%",
      change: "+0.6%",
      changeType: "success",
      icon: FiTrendingUp,
      iconBgColor: "bg-amber-50",
      iconTextColor: "text-amber-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header section */}
      <SectionHeader
        title="Dashboard Overview"
        description="Monitor your campaign performance and AI operations in real-time."
      />

      {/* Grid statistics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            name={stat.name}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
            iconTextColor={stat.iconTextColor}
          />
        ))}
      </div>

      {/* Main empty state panel */}
      <EmptyState
        icon={FiTarget}
        title="No campaigns selected"
        description="Select a campaign from the sidebar or click Create Campaign to start generating new ad creatives with Gemini AI."
      />
    </div>
  );
};

export default Dashboard;
