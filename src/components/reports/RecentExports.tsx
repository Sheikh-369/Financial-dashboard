const exports = [
  { name: 'Monthly_Expense_Audit_Nov.pdf', meta: 'Exported by Zunaid S. • 4.2 MB', date: 'Nov 12, 2025', icon: 'picture_as_pdf' },
  { name: 'Q3_Tax_Worksheet_Final.xlsx', meta: 'Exported by LedgerBot • 1.1 MB', date: 'Oct 29, 2025', icon: 'table_chart' },
  { name: 'Equity_Distribution_Review.pdf', meta: 'Exported by Zunaid S. • 850 KB', date: 'Oct 05, 2025', icon: 'picture_as_pdf' },
];

export default function RecentExports() {
  return (
    <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-xs font-black tracking-[0.3em] uppercase text-slate-400">Recent Exports</h4>
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-black transition-colors">
          View Full History
        </button>
      </div>

      <div className="space-y-2">
        {exports.map((file, i) => (
          <div 
            key={i} 
            className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-black">{file.icon}</span>
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">{file.name}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-tight">{file.meta}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <span className="text-[11px] font-bold text-slate-300 group-hover:text-slate-500 transition-colors">
                {file.date}
              </span>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-200 hover:text-black hover:bg-white hover:shadow-sm transition-all">
                <span className="material-symbols-outlined text-xl">download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}