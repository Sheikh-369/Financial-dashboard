export default function AnnualArchiveCard() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
          <span 
            className="material-symbols-outlined text-black" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>
        <div>
          <h4 className="font-black text-slate-900 tracking-tight">Annual Review 2025</h4>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Archived Jan 2, 2026</p>
        </div>
      </div>
      
      <p className="text-sm text-slate-500 mb-8 italic leading-relaxed font-medium">
        "A high-level synthesis of organizational growth and fiscal milestones throughout the previous calendar year."
      </p>
      
      <button className="mt-auto w-full bg-slate-50 text-slate-900 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-200/50 hover:bg-slate-100 transition-colors">
        View Archive
      </button>
    </div>
  );
}