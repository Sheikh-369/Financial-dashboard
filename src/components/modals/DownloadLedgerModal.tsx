"use client";
import React from 'react';

export default function DownloadLedgerModal({ onClose }: { onClose: () => void }) {
  const formats = [
    { name: 'PDF Document', desc: 'Audit-ready formatted report' },
    { name: 'CSV Spreadsheet', desc: 'Raw data for Excel/Sheets' },
    { name: 'JSON API', desc: 'Structured developer data' }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white dark:bg-[#132335] rounded-[2.5rem] p-10 border border-white/10 shadow-2xl animate-in zoom-in-95">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Export Module</span>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2 mb-8 tracking-tighter">System Ledger</h3>
        
        <div className="space-y-3">
          {formats.map((f) => (
            <button 
              key={f.name}
              type="button" 
              className="w-full text-left p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-slate-300 dark:hover:border-white/20 transition-all group"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">{f.name}</p>
              <p className="text-[11px] font-bold text-slate-400 mt-1">{f.desc}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-10">
          <button type="button" onClick={onClose} className="flex-1 py-4 text-[10px] font-black uppercase text-slate-400">Cancel</button>
          <button type="button" className="flex-[2] py-4 bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg">Generate File</button>
        </div>
      </div>
    </div>
  );
}