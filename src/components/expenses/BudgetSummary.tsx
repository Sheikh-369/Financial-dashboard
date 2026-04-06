"use client";

export default function BudgetSummary() {
  return (
    <div className="bg-white dark:bg-[#132335] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm relative overflow-hidden h-full flex flex-col justify-between transition-all duration-500">
      {/* Status Badge */}
      <div className="absolute top-0 right-0 p-8">
        <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-colors">
          Under Budget
        </span>
      </div>
      
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4 font-black transition-colors">Monthly Allocation</p>
        <h3 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-10 transition-colors">$142,850.00</h3>
        
        <div className="space-y-10 max-w-md">
          {/* Burn Rate Section */}
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              <span>Quarterly Burn Rate</span>
              <span className="text-slate-900 dark:text-white transition-colors">64%</span>
            </div>
            {/* Progress Track */}
            <div className="w-full h-3 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden transition-colors">
              <div 
                className="bg-black dark:bg-white h-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(255,255,255,0.05)]" 
                style={{ width: '64%' }}
              ></div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 transition-colors">Available</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white transition-colors">$51,426.00</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 transition-colors">Overrun</p>
              <p className="text-3xl font-black text-rose-500 transition-colors">None</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-16 flex gap-4">
        {/* Primary Action flips in Dark Mode */}
        <button className="bg-black dark:bg-white text-white dark:text-[#0B1C30] px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-200 transition-all active:scale-[0.98] shadow-lg shadow-black/5">
          Download Ledger
        </button>
        <button className="bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-200/50 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-[0.98]">
          Review Policy
        </button>
      </div>
    </div>
  );
}