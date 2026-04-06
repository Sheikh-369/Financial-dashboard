"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function InterfaceAesthetics() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#132335] text-white p-10 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden relative group transition-all duration-700">
      {/* Dynamic Background Glow */}
      <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-40 transition-colors duration-1000 ${
        theme === 'light' ? 'bg-amber-200' : 'bg-white'
      }`}></div>
      
      <h3 className="text-[10px] font-black mb-10 relative z-10 tracking-[0.4em] uppercase text-slate-500">Interface Aesthetics</h3>
      
      <div className="flex flex-col gap-4 relative z-10">
        {/* Light Mode Option */}
        <label 
          onClick={() => setTheme('light')}
          className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
            theme === 'light' 
              ? 'bg-white text-[#0B1C30] border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
              : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`material-symbols-outlined ${theme === 'light' ? 'fill-1' : ''}`}>light_mode</span>
            <span className="text-[11px] font-black uppercase tracking-widest">Light Authority</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            theme === 'light' ? 'border-[#0B1C30]' : 'border-white/20'
          }`}>
            {theme === 'light' && <div className="w-2.5 h-2.5 bg-[#0B1C30] rounded-full animate-in zoom-in-50" />}
          </div>
        </label>

        {/* Dark Mode Option */}
        <label 
          onClick={() => setTheme('dark')}
          className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-white text-[#0B1C30] border-white shadow-[0_0_30px_rgba(255,255,255,0.15)]' 
              : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`material-symbols-outlined ${theme === 'dark' ? 'fill-1' : ''}`}>dark_mode</span>
            <span className="text-[11px] font-black uppercase tracking-widest">Deep Ledger</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            theme === 'dark' ? 'border-[#0B1C30]' : 'border-white/20'
          }`}>
            {theme === 'dark' && <div className="w-2.5 h-2.5 bg-[#0B1C30] rounded-full animate-in zoom-in-50" />}
          </div>
        </label>
      </div>
    </section>
  );
}