export default function CategoryAllocation() {
  const categories = [
    { name: 'Payroll & Benefits', percent: 35, color: 'bg-black' },
    { name: 'Infrastructure', percent: 25, color: 'bg-emerald-600' },
    { name: 'Marketing', percent: 25, color: 'bg-slate-400' },
    { name: 'Operations', percent: 15, color: 'bg-slate-200' },
  ];

  return (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
      <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-10">Category Allocation</h4>
      
      <div className="relative w-44 h-44 mx-auto mb-10">
        <div 
          className="w-full h-full rounded-full" 
          style={{ background: 'conic-gradient(#000 0% 35%, #059669 35% 60%, #94a3b8 60% 85%, #e2e8f0 85% 100%)' }}
        />
        <div className="absolute inset-4 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
          <div className="text-center">
            <p className="text-[9px] font-black text-slate-400 tracking-widest uppercase">Top Spend</p>
            <p className="text-base font-black text-slate-900">Payroll</p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full ${cat.color}`}></span>
              <span className="text-xs font-bold text-slate-600 group-hover:text-black transition-colors">{cat.name}</span>
            </div>
            <span className="text-xs font-black text-slate-900">{cat.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}