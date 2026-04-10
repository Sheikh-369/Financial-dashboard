"use client";
import React from 'react';

export default function ReviewPolicyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white dark:bg-[#132335] rounded-[2.5rem] p-12 border border-white/10 shadow-2xl animate-in zoom-in-95">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-amber-500">verified_user</span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Governance</span>
        </div>
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Usage Policy</h3>
        <div className="space-y-6 mb-10 text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
          <div className="flex gap-4">
            <span className="text-slate-300 dark:text-white/10 font-mono">01</span>
            <p>Disbursements exceeding $10k require CFO secondary digital authorization.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-300 dark:text-white/10 font-mono">02</span>
            <p>Marketing budgets are audited bi-weekly for performance-to-spend ratios.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-300 dark:text-white/10 font-mono">03</span>
            <p>Access to raw ledger data is restricted to Level-3 cleared administrative accounts.</p>
          </div>
        </div>
        <button 
          type="button" 
          onClick={onClose} 
          className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-all"
        >
          Acknowledge & Close
        </button>
      </div>
    </div>
  );
}