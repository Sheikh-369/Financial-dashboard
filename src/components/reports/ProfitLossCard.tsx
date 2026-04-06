export default function ProfitLossCard() {
  return (
    <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 inline-block">
            Primary Template
          </span>
          <h3 className="text-3xl font-black tracking-tighter text-slate-900">Profit & Loss Analysis</h3>
          <p className="text-slate-500 mt-2 text-sm font-medium">Comprehensive breakdown of revenues vs operational overhead.</p>
        </div>
        <span className="material-symbols-outlined text-5xl text-slate-100 group-hover:text-black transition-colors duration-500">
          description
        </span>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-8">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Gross Revenue</p>
          <p className="text-3xl font-black text-slate-900">$248.5k</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Net Margin</p>
          <p className="text-3xl font-black text-emerald-600">+18.4%</p>
        </div>
        <div className="flex items-end justify-end">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-black group-hover:text-white transition-all">
             <span className="material-symbols-outlined text-sm">trending_up</span>
          </div>
        </div>
      </div>
    </div>
  );
}