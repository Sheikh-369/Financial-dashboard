"use client";

export default function ExpenseAllocation() {
  return (
    <div className="bg-white dark:bg-[#132335] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col h-[450px] transition-colors duration-500">
      <h3 className="text-lg font-black font-headline text-slate-900 dark:text-white">Expense Allocation</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-12">Category breakdown</p>

      <div className="flex-1 flex items-center justify-center mb-8">
        <div className="relative w-40 h-40">
          {/* Base Track - Softening for Dark Mode */}
          <div className="absolute inset-0 border-[14px] border-slate-50 dark:border-white/5 rounded-2xl" />
          
          {/* Operations Segment - Switching Black to White in Dark Mode */}
          <div className="absolute inset-0 border-[14px] border-transparent border-l-black dark:border-l-white border-b-black dark:border-b-white rounded-2xl transition-colors duration-500" />
          
          {/* Marketing Segment - Kept Emerald for Brand consistency */}
          <div className="absolute top-0 right-0 w-1/2 h-[14px] bg-emerald-700 rounded-tr-2xl" />
          <div className="absolute top-0 right-0 h-1/2 w-[14px] bg-emerald-700" />

          {/* Inner Text Labels */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Total</span>
            <span className="text-2xl font-black font-headline text-slate-900 dark:text-white">$12k</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Operations Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-black dark:bg-white transition-colors" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Operations</span>
          </div>
          <span className="text-sm font-black dark:text-white">55%</span>
        </div>

        {/* Marketing Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-700" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Marketing</span>
          </div>
          <span className="text-sm font-black dark:text-white">25%</span>
        </div>

        {/* Other Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/10" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Other</span>
          </div>
          <span className="text-sm font-black dark:text-white">20%</span>
        </div>
      </div>
    </div>
  );
}