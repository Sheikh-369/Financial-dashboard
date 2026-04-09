"use client";

import { useTheme } from "next-themes";

export default function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
      <h3 className="text-xl font-black mb-10 flex items-center gap-3 tracking-tight text-[#0F172A] dark:text-white">
        <span className="material-symbols-outlined text-2xl">contrast</span>
        Visual Interface
      </h3>
      
      <div className="flex gap-4">
        {[
          { id: 'light', icon: 'light_mode', label: 'Day' },
          { id: 'dark', icon: 'dark_mode', label: 'Night' }
        ].map((mode) => (
          <button
            key={mode.id}
            onClick={() => setTheme(mode.id)}
            className={`flex-1 flex items-center justify-center gap-3 p-6 rounded-[2rem] border transition-all ${
              theme === mode.id 
                ? "bg-[#0F172A] text-white border-[#0F172A]" 
                : "bg-[#F8FAFF] dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700"
            }`}
          >
            <span className="material-symbols-outlined">{mode.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{mode.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
