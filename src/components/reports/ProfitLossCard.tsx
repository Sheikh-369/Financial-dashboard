"use client";

export default function ProfitLossCard() {
  return (
    <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] p-6 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl dark:hover:shadow-none transition-all duration-500 group cursor-pointer h-full flex flex-col justify-between overflow-hidden relative">
      
      {/* 1. Header Section */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex-1">
          <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-8 inline-block transition-colors">
            Primary Template
          </span>
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors leading-tight">
            Profit & Loss <br /> Analysis
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-[13px] font-bold uppercase tracking-tight max-w-xs transition-colors">
            Comprehensive breakdown of revenues vs operational overhead.
          </p>
        </div>
        
        {/* Large Ghost Icon */}
        <span className="material-symbols-outlined text-5xl md:text-7xl text-slate-50 dark:text-white/5 group-hover:text-black dark:group-hover:text-white transition-all duration-700 select-none">
          description
        </span>
      </div>

      {/* 2. Metrics Section */}
      <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 relative z-10">
        <div>
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 transition-colors">Gross Revenue</p>
          <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white transition-colors">$248.5k</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 transition-colors">Net Margin</p>
          <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400 transition-colors shadow-emerald-500/20">
            +18.4%
          </p>
        </div>
        
        {/* Interactive Trending Circle */}
        <div className="flex items-center justify-start sm:items-end sm:justify-end">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#0B1C30] flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-[#0B1C30] transition-all duration-500 shadow-sm active:scale-95">
             <span className="material-symbols-outlined text-sm font-black">trending_up</span>
          </div>
        </div>
      </div>

      {/* Subtle Background Accent for Dark Mode */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-white/5 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none"></div>
    </div>
  );
}