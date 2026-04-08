"use client";
import React from 'react';

const exports = [
  { name: 'Monthly_Expense_Audit_Nov.pdf', meta: 'Exported by Zunaid S. • 4.2 MB', date: 'Nov 12, 2025', icon: 'picture_as_pdf' },
  { name: 'Q3_Tax_Worksheet_Final.xlsx', meta: 'Exported by LedgerBot • 1.1 MB', date: 'Oct 29, 2025', icon: 'table_chart' },
  { name: 'Equity_Distribution_Review.pdf', meta: 'Exported by Zunaid S. • 850 KB', date: 'Oct 05, 2025', icon: 'picture_as_pdf' },
];

export default function RecentExports() {
  return (
    <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] p-5 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm h-full transition-all duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 px-2 gap-4">
        <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 dark:text-slate-500 transition-colors">
          Recent Exports
        </h4>
        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors">
          View Full History
        </button>
      </div>

      <div className="space-y-3">
        {exports.map((file, i) => (
          <div 
            key={i} 
            className="group flex items-center justify-between p-3 md:p-5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-3 md:gap-6 min-w-0">
              {/* File Icon Container - Scaled for mobile */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 dark:bg-[#0B1C30] rounded-xl flex-shrink-0 flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-black dark:group-hover:text-[#0B1C30] transition-colors">
                  {file.icon}
                </span>
              </div>
              
              <div className="min-w-0">
                <p className="font-black text-sm text-slate-900 dark:text-white transition-colors tracking-tight truncate">
                  {file.name}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mt-1 truncate max-w-[140px] xs:max-w-[200px] md:max-w-none">
                  {file.meta}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-10 flex-shrink-0">
              <span className="hidden sm:inline-block text-[11px] font-black uppercase tracking-tighter text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">
                {file.date}
              </span>
              
              {/* Download Action */}
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-200 dark:text-slate-700 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all active:scale-90">
                <span className="material-symbols-outlined text-2xl">download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}