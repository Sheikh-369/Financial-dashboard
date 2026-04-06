export default function DispatchCenter() {
  return (
    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200/50">
      <h3 className="text-lg font-black mb-6 tracking-tight">Dispatch Center</h3>
      <div className="space-y-6">
        {[
          { title: "Ledger Updates", desc: "Daily transaction summaries", active: true },
          { title: "Risk Alerts", desc: "Critical security pings", active: true },
          { title: "Report Readiness", desc: "Monthly closing alerts", active: false },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-900">{item.title}</p>
              <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">{item.desc}</p>
            </div>
            <button 
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${item.active ? 'bg-black' : 'bg-slate-300'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${item.active ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-slate-200">
        <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-4">Digest Frequency</p>
        <div className="flex flex-wrap gap-2">
          {['Immediate', 'Daily', 'Weekly'].map((label) => (
            <span 
              key={label}
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border cursor-pointer transition-all ${
                label === 'Immediate' ? 'bg-black text-white border-black' : 'bg-white text-slate-400 border-slate-200 hover:border-slate-400'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}