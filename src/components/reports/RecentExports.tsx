"use client";
import React, { useState } from 'react';

const exports = [
  { name: 'Monthly_Expense_Audit_Nov.pdf', meta: 'Exported by Zunaid S. • 4.2 MB', date: 'Nov 12, 2025', icon: 'picture_as_pdf' },
  { name: 'Q3_Tax_Worksheet_Final.xlsx', meta: 'Exported by LedgerBot • 1.1 MB', date: 'Oct 29, 2025', icon: 'table_chart' },
  { name: 'Equity_Distribution_Review.pdf', meta: 'Exported by Zunaid S. • 850 KB', date: 'Oct 05, 2025', icon: 'picture_as_pdf' },
];

// Extended list for the Full History view
const fullHistory = [
  ...exports,
  { name: 'Global_Payroll_Summary_Q2.pdf', meta: 'Exported by Zunaid S. • 2.4 MB', date: 'Sep 15, 2025', icon: 'picture_as_pdf' },
  { name: 'Infrastructure_Cloud_Costs.csv', meta: 'Exported by System • 120 KB', date: 'Aug 22, 2025', icon: 'table_chart' },
  { name: 'Vendor_Compliance_Audit.pdf', meta: 'Exported by Zunaid S. • 3.1 MB', date: 'July 10, 2025', icon: 'picture_as_pdf' },
  { name: 'Internal_Audit_Report_2024.pdf', meta: 'Exported by LedgerBot • 5.5 MB', date: 'June 30, 2025', icon: 'picture_as_pdf' },
];

export default function RecentExports() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] p-5 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm h-full transition-all duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 px-2 gap-4">
        <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 dark:text-slate-500 transition-colors">
          Recent Exports
        </h4>
        <button 
          onClick={() => setShowHistory(true)}
          className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors"
        >
          View Full History
        </button>
      </div>

      <div className="space-y-3">
        {exports.map((file, i) => (
          <FileRow key={i} file={file} />
        ))}
      </div>

      {/* FULL HISTORY MODAL OVERLAY */}
      {showHistory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowHistory(false)}
          />
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#132335] rounded-[2.5rem] p-6 md:p-10 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[80vh]">
            <div className="flex justify-between items-center mb-8 px-2">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Export History</h3>
              <button 
                onClick={() => setShowHistory(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-black dark:hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="overflow-y-auto pr-2 space-y-3 custom-scrollbar">
              {fullHistory.map((file, i) => (
                <FileRow key={i} file={file} />
              ))}
            </div>
            
            <button 
              onClick={() => setShowHistory(false)}
              className="w-full mt-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-all"
            >
              Close History
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Row Component to avoid duplication
function FileRow({ file }: { file: any }) {
  return (
    <div className="group flex items-center justify-between p-3 md:p-5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 cursor-default">
      <div className="flex items-center gap-3 md:gap-6 min-w-0">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 dark:bg-[#0B1C30] rounded-xl flex-shrink-0 flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-white transition-all duration-300">
          <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-black dark:group-hover:text-[#0B1C30]">
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
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-200 dark:text-slate-700 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all active:scale-90">
          <span className="material-symbols-outlined text-2xl">download</span>
        </button>
      </div>
    </div>
  );
}