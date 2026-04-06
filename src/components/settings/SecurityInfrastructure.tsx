"use client";
import React from 'react';

export default function SecurityInfrastructure() {
  return (
    <section className="bg-white dark:bg-[#132335] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm transition-all duration-500">
      <h3 className="text-xl font-black mb-10 flex items-center gap-4 tracking-tighter text-[#0F172A] dark:text-white transition-colors">
        <span className="material-symbols-outlined text-2xl">shield</span>
        Security Infrastructure
      </h3>
      
      <div className="space-y-6">
        {/* Two-Factor Auth Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-7 bg-[#F8FAFF] dark:bg-[#0B1C30] rounded-[2.5rem] border border-slate-100/50 dark:border-white/5 transition-colors gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#E8FFF3] dark:bg-emerald-500/10 flex items-center justify-center text-[#10B981] dark:text-emerald-400 border border-[#D1FAE5] dark:border-emerald-500/20 shadow-inner">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                published_with_changes
              </span>
            </div>
            <div>
              <p className="font-black text-[15px] text-[#0F172A] dark:text-white tracking-tight transition-colors">Two-Factor Authentication</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mt-1 transition-colors">
                Status: Highly Protected
              </p>
            </div>
          </div>
          <div className="px-8 py-2.5 bg-[#10B981] dark:bg-emerald-500 text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
            Enabled
          </div>
        </div>

        {/* Password Management Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-7 bg-[#F8FAFF] dark:bg-[#0B1C30] rounded-[2.5rem] border border-slate-100/50 dark:border-white/5 transition-colors gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#132335] flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-white/10 shadow-sm">
              <span className="material-symbols-outlined text-3xl">person_search</span>
            </div>
            <div>
              <p className="font-black text-[15px] text-[#0F172A] dark:text-white tracking-tight transition-colors">Password Management</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mt-1 transition-colors">
                Last changed 42 days ago
              </p>
            </div>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] px-10 py-3.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm text-[#0F172A] dark:text-white active:scale-95">
            Update
          </button>
        </div>

        {/* Active Sessions Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-7 bg-[#F8FAFF] dark:bg-[#0B1C30] rounded-[2.5rem] border border-slate-100/50 dark:border-white/5 transition-colors gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#132335] flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-white/10 shadow-sm">
              <span className="material-symbols-outlined text-3xl">devices</span>
            </div>
            <div>
              <p className="font-black text-[15px] text-[#0F172A] dark:text-white tracking-tight transition-colors">Active Sessions</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mt-1 transition-colors">
                3 devices currently authorized
              </p>
            </div>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EF4444] hover:bg-rose-500/10 px-6 py-2.5 rounded-full transition-all active:scale-95">
            Revoke All
          </button>
        </div>
      </div>
    </section>
  );
}