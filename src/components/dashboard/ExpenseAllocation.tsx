export default function ExpenseAllocation() {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col h-[450px]">
      <h3 className="text-lg font-bold font-headline text-slate-900">Expense Allocation</h3>
      <p className="text-sm text-slate-500 mb-12">Category breakdown</p>

      <div className="flex-1 flex items-center justify-center mb-8">
        <div className="relative w-40 h-40">
          {/* Base Gray Border */}
          <div className="absolute inset-0 border-[14px] border-slate-50 rounded-2xl" />
          
          {/* Black Segment (Left and Bottom) */}
          <div className="absolute inset-0 border-[14px] border-transparent border-l-black border-b-black rounded-2xl" />
          
          {/* Green Segment (Top Right) */}
          <div className="absolute top-0 right-0 w-1/2 h-[14px] bg-emerald-700 rounded-tr-2xl" />
          <div className="absolute top-0 right-0 h-1/2 w-[14px] bg-emerald-700" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Total</span>
            <span className="text-2xl font-bold font-headline text-slate-900">$12k</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-black" />
            <span className="text-sm font-semibold text-slate-900">Operations</span>
          </div>
          <span className="text-sm font-bold">55%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-700" />
            <span className="text-sm font-semibold text-slate-900">Marketing</span>
          </div>
          <span className="text-sm font-bold">25%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="text-sm font-semibold text-slate-900">Other</span>
          </div>
          <span className="text-sm font-bold">20%</span>
        </div>
      </div>
    </div>
  );
}