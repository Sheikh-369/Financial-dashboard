"use client";

export default function ReportGenerator() {
  return (
    <div className="bg-slate-100/50 dark:bg-white/5 p-8 rounded-[2rem] border border-slate-200/20 dark:border-white/5 space-y-6 backdrop-blur-md transition-all duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Template Selection */}
        <div className="space-y-2">
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors">
            Template
          </label>
          <select className="w-full bg-white dark:bg-[#0B1C30] border-none rounded-xl py-3.5 px-4 text-[11px] font-black uppercase tracking-tight text-slate-900 dark:text-white focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 shadow-sm transition-all appearance-none cursor-pointer">
            <option>Profit & Loss Statement</option>
            <option>Tax Liability Report</option>
            <option>Annual Fiscal Review</option>
          </select>
        </div>

        {/* Fiscal Period Input */}
        <div className="space-y-2">
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors">
            Fiscal Period
          </label>
          <input 
            className="w-full bg-white dark:bg-[#0B1C30] border-none rounded-xl py-3.5 px-4 text-[11px] font-black uppercase tracking-tight text-slate-900 dark:text-white focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 shadow-sm transition-all outline-none"
            type="text" 
            defaultValue="Jan 2026 - Dec 2026"
          />
        </div>
      </div>

      {/* Primary Action Button */}
      <button className="w-full bg-black dark:bg-white text-white dark:text-[#0B1C30] py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-[0.98] shadow-xl shadow-black/5">
        Generate Document
      </button>
    </div>
  );
}