export default function InterfaceAesthetics() {
  return (
    <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
      
      <h3 className="text-lg font-black mb-6 relative z-10 tracking-tight">Interface Aesthetics</h3>
      
      <div className="flex flex-col gap-3 relative z-10">
        <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400">light_mode</span>
            <span className="text-sm font-bold">Light Authority</span>
          </div>
          <input type="radio" name="theme" className="text-white focus:ring-0 bg-transparent border-white/30" />
        </label>

        <label className="flex items-center justify-between p-4 rounded-xl bg-white/10 border border-white/40 cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white">dark_mode</span>
            <span className="text-sm font-bold">Deep Ledger</span>
          </div>
          <input type="radio" name="theme" defaultChecked className="text-white focus:ring-0 bg-transparent border-white" />
        </label>
      </div>
    </section>
  );
}