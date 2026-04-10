"use client";
import React, { useEffect } from 'react';

interface Props {
  category: { name: string; percent: number; color: string; desc: string };
  onClose: () => void;
}

export default function AllocationDetailModal({ category, onClose }: Props) {
  // Prevent body scroll on mobile when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#132335] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className={`h-2 w-full ${category.color}`} />
        <div className="p-8 sm:p-12">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
              {category.name}
            </h3>
            <button 
              type="button"
              onClick={onClose} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
            {category.desc}
          </p>

          <div className="bg-slate-50 dark:bg-[#0B1C30] p-6 rounded-3xl border border-slate-100 dark:border-white/5">
            <div className="flex justify-between mb-4">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Allocation weight</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{category.percent}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full ${category.color} transition-all duration-1000`} 
                style={{ width: `${category.percent}%` }} 
              />
            </div>
          </div>

          <button 
            type="button"
            onClick={onClose}
            className="w-full mt-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-2xl active:scale-[0.98] transition-all shadow-lg shadow-black/10"
          >
            Acknowledge Report
          </button>
        </div>
      </div>
    </div>
  );
}