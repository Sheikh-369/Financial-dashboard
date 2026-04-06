"use client";
import React from 'react';

export default function DangerZone() {
  return (
    <section className="p-8 border border-red-100 dark:border-red-900/30 rounded-2xl bg-red-50/30 dark:bg-red-900/10 transition-colors">
      <h3 className="text-lg font-black text-red-600 dark:text-red-500 mb-2 tracking-tight">Danger Zone</h3>
      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        Archive your historical data and permanently deactivate this ledger access. This action cannot be undone.
      </p>
      <button className="w-full py-3.5 bg-white dark:bg-red-950/20 text-red-600 dark:text-red-500 border border-red-200 dark:border-red-900/50 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all shadow-sm shadow-red-100 dark:shadow-none">
        Deactivate Account
      </button>
    </section>
  );
}