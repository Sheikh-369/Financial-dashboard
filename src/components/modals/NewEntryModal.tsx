"use client";
import React from 'react';

interface NewEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewEntryModal({ isOpen, onClose }: NewEntryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 dark:bg-black/80 backdrop-blur-md p-6">
      <div className="absolute inset-0" onClick={onClose} />
      
      <section className="relative bg-white dark:bg-[#132335] w-full max-w-2xl rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-50 dark:bg-[#0B1C30] p-8 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase">New Ledger Protocol</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mt-1">Full Transaction Documentation</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-black dark:hover:text-white transition-colors border border-slate-100 dark:border-white/10">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-10 space-y-8">
          
          {/* Row 1: The "Who" & "What" (Crucial for the Ledger) */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Entity / Client</label>
              <input 
                type="text" 
                placeholder="e.g. Acme Corp."
                className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 outline-none transition-all" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Transaction Category</label>
              <input 
                type="text" 
                placeholder="e.g. Software License"
                className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 outline-none transition-all" 
              />
            </div>
          </div>

          {/* Row 2: Flow & Amount */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Flow Type</label>
              <select className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 outline-none transition-all cursor-pointer appearance-none">
                <option>Revenue / Credit</option>
                <option>Expense / Debit</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Net Amount (USD)</label>
              <input type="number" placeholder="0.00" className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 outline-none transition-all" />
            </div>
          </div>

          {/* Row 3: Date & Sector */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Date</label>
              <input type="date" className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 outline-none transition-all cursor-pointer" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Chart Allocation</label>
              <select className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 outline-none transition-all cursor-pointer appearance-none">
                <option>Tech & Infrastructure</option>
                <option>Design & Creative</option>
                <option>Marketing & Growth</option>
                <option>Admin & Legal</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-10 pt-0">
          <button 
            onClick={onClose}
            className="w-full py-5 bg-black dark:bg-white text-white dark:text-[#0B1C30] rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.4em] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-black/10"
          >
            Execute Commitment
          </button>
        </div>
      </section>
    </div>
  );
}