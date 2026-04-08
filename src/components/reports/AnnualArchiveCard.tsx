"use client";
import React from 'react';

export default function AnnualArchiveCard() {
  return (
    <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] p-6 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm flex flex-col h-full transition-all duration-500">
      <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
        {/* Icon Seal - Recessed look in Dark Mode */}
        <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-slate-50 dark:bg-[#0B1C30] rounded-2xl flex items-center justify-center border border-slate-100 dark:border-white/10 transition-colors shadow-inner">
          <span 
            className="material-symbols-outlined text-black dark:text-white transition-colors" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>
        <div>
          <h4 className="font-black text-slate-900 dark:text-white tracking-tighter text-lg transition-colors">
            Annual Review 2025
          </h4>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors">
            Archived Jan 2, 2026
          </p>
        </div>
      </div>
      
      {/* Editorial Quote - Adjusted weight for Deep Ledger */}
      <p className="text-sm md:text-[15px] mb-8 md:mb-10 text-slate-500 dark:text-slate-400 italic leading-relaxed font-bold uppercase tracking-tight transition-colors">
        "A high-level synthesis of organizational growth and fiscal milestones throughout the previous calendar year."
      </p>
      
      {/* Action Button - Flipped to subtle glass in Dark Mode */}
      <button className="mt-auto w-full bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white py-3 md:py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border border-slate-200/50 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-[0.98]">
        View Archive
      </button>
    </div>
  );
}