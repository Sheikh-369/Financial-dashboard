export default function BudgetSummary() {
  return (
    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden h-full flex flex-col justify-between">
      <div className="absolute top-0 right-0 p-8">
        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black tracking-widest uppercase">
          Under Budget
        </span>
      </div>
      
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4 font-black">Monthly Allocation</p>
        <h3 className="text-6xl font-black tracking-tighter text-slate-900 mb-8">$142,850.00</h3>
        
        <div className="space-y-8 max-w-md">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
              <span>Quarterly Burn Rate</span>
              <span className="text-slate-900">64%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="bg-black h-full w-[64%] transition-all duration-1000"></div>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Available</p>
              <p className="text-2xl font-black text-slate-900">$51,426.00</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Overrun</p>
              <p className="text-2xl font-black text-rose-500">None</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <button className="bg-black text-white px-8 py-3 rounded-lg font-bold text-xs hover:bg-slate-800 transition-colors">
          Download Ledger
        </button>
        <button className="bg-slate-50 text-slate-600 px-8 py-3 rounded-lg font-bold text-xs border border-slate-200/50 hover:bg-slate-100 transition-colors">
          Review Policy
        </button>
      </div>
    </div>
  );
}