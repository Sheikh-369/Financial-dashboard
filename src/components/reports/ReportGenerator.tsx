"use client";

export default function ReportGenerator() {
  return (
    <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/20 space-y-4 backdrop-blur-sm">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Template</label>
          <select className="w-full bg-white border-none rounded-lg py-3 px-4 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-black/5 shadow-sm">
            <option>Profit & Loss Statement</option>
            <option>Tax Liability Report</option>
            <option>Annual Fiscal Review</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Fiscal Period</label>
          <input 
            className="w-full bg-white border-none rounded-lg py-3 px-4 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-black/5 shadow-sm"
            type="text" 
            defaultValue="Jan 2026 - Dec 2026"
          />
        </div>
      </div>
      <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-[0.98]">
        Generate Document
      </button>
    </div>
  );
}