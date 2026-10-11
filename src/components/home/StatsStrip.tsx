import React from 'react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: "25+",
      label: "Years of Vision",
      icon: "history_edu",
    },
    {
      value: "5,000+",
      label: "Students Guided",
      icon: "groups",
    },
    {
      value: "120+",
      label: "Educators & Staff",
      icon: "badge",
    },
    {
      value: "4",
      label: "Learning Stages",
      icon: "stairs",
    },
  ];

  return (
    <section className="relative z-20 w-full bg-white shadow-xs border-b border-[#E3E8ED]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 p-2 group hover:-translate-y-0.5 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 shadow-xs transition-transform group-hover:scale-105 border border-slate-200/60">
                <span className="material-symbols-outlined text-[28px]">{stat.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-primary-container tracking-tight leading-none font-bold">
                  {stat.value}
                </span>
                <span className="font-label-sm text-[11px] sm:text-xs uppercase tracking-wider text-outline mt-1 font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
