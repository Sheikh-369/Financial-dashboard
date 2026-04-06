export default function TaxSummaryCard() {
  return (
    <div className="bg-black text-white rounded-2xl p-8 flex flex-col border border-black hover:scale-[1.02] transition-transform duration-300 h-full">
      <span className="px-3 py-1 bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest rounded-full self-start mb-10">
        Compliance
      </span>
      <h3 className="text-2xl font-black tracking-tight mb-4 leading-tight">Quarterly Tax Summary</h3>
      <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
        Estimated liabilities for Q1 based on projected distributions and VAT reconciliation.
      </p>
      
      <div className="mt-auto space-y-3">
        <div className="flex justify-between items-center py-4 border-b border-white/10">
          <span className="text-[10px] font-black uppercase text-slate-500">Next Filing</span>
          <span className="text-sm font-bold">Jan 15, 2026</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-[10px] font-black uppercase text-slate-500">Status</span>
          <span className="px-3 py-1 bg-emerald-500 text-white text-[9px] font-black rounded-full uppercase tracking-widest">
            Ready
          </span>
        </div>
      </div>
    </div>
  );
}