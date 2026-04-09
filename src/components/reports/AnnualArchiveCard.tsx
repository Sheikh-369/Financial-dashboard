"use client";
import React from 'react';

export default function AnnualArchiveCard() {
  return (
    <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] p-6 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm flex flex-col h-full transition-all duration-500">
      <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-10">
        {/* Icon Seal - Slightly smaller on tablet to save vertical height */}
        <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 bg-slate-50 dark:bg-[#0B1C30] rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-100 dark:border-white/10 transition-colors shadow-inner">
          <span 
            className="material-symbols-outlined text-black dark:text-white transition-colors text-xl md:text-2xl" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>
        <div className="min-w-0">
          <h4 className="font-black text-slate-900 dark:text-white tracking-tighter text-base md:text-lg transition-colors truncate">
            Annual Review 2025
          </h4>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors">
            Archived Jan 2, 2026
          </p>
        </div>
      </div>
      
      {/* Editorial Quote - Reduced padding/size slightly for tablet stability */}
      <p className="text-[13px] md:text-[15px] mb-6 md:mb-10 text-slate-500 dark:text-slate-400 italic leading-relaxed font-bold uppercase tracking-tight transition-colors">
        "A high-level synthesis of organizational growth and fiscal milestones throughout the previous calendar year."
      </p>
      
      {/* Action Button */}
      <button className="mt-auto w-full bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-slate-200/50 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-[0.98]">
        View Archive
      </button>
    </div>
  );
}