export default function SecurityInfrastructure() {
  return (
    <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
      <h3 className="text-xl font-black mb-10 flex items-center gap-3 tracking-tight text-[#0F172A]">
        <span className="material-symbols-outlined text-2xl">shield</span>
        Security Infrastructure
      </h3>
      
      <div className="space-y-6">
        {/* Two-Factor Auth Row */}
        <div className="flex items-center justify-between p-6 bg-[#F8FAFF] rounded-[2rem] border border-slate-100/50">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#E8FFF3] flex items-center justify-center text-[#10B981] border border-[#D1FAE5]">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                published_with_changes
              </span>
            </div>
            <div>
              <p className="font-bold text-[15px] text-[#0F172A]">Two-Factor Authentication</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mt-1">
                Status: Highly Protected
              </p>
            </div>
          </div>
          <div className="px-6 py-2 bg-[#10B981] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-emerald-100">
            Enabled
          </div>
        </div>

        {/* Password Management Row */}
        <div className="flex items-center justify-between p-6 bg-[#F8FAFF] rounded-[2rem] border border-slate-100/50">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
              <span className="material-symbols-outlined text-2xl">person_search</span>
            </div>
            <div>
              <p className="font-bold text-[15px] text-[#0F172A]">Password Management</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mt-1">
                Last changed 42 days ago
              </p>
            </div>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm text-[#0F172A]">
            Update
          </button>
        </div>

        {/* Active Sessions Row (The Missing Piece) */}
        <div className="flex items-center justify-between p-6 bg-[#F8FAFF] rounded-[2rem] border border-slate-100/50">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
              <span className="material-symbols-outlined text-2xl">devices</span>
            </div>
            <div>
              <p className="font-bold text-[15px] text-[#0F172A]">Active Sessions</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mt-1">
                3 devices currently authorized
              </p>
            </div>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EF4444] hover:underline underline-offset-4 transition-all">
            Revoke All
          </button>
        </div>
      </div>
    </section>
  );
}