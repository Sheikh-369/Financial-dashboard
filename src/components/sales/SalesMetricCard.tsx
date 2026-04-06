"use client";
interface Props {
  title: string;
  value: string;
  progress?: number;
  trend?: string;
  isNegative?: boolean;
}

export default function SalesMetricCard({ title, value, progress, trend, isNegative }: Props) {
  return (
    <div className="bg-white dark:bg-[#132335] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm transition-colors duration-500 flex flex-col justify-between h-full">
      <div>
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{title}</p>
        <h4 className="text-3xl font-black mt-3 text-slate-900 dark:text-white tracking-tighter transition-colors">{value}</h4>
      </div>
      
      {progress !== undefined && (
        <div className="mt-6 pt-6 border-t border-slate-50 dark:border-white/5">
          <div className="flex justify-between items-center text-[10px] font-black mb-2 uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <span>Target Performance</span>
            <span className="text-slate-900 dark:text-white">{progress}%</span>
          </div>
          {/* Progress Track */}
          <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
            {/* Progress Bar - Swaps Black for White in Dark Mode */}
            <div 
              className="bg-black dark:bg-white h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {trend && (
        <div className={`mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl w-fit font-black text-[10px] uppercase tracking-widest transition-colors ${
          isNegative 
            ? 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400' 
            : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
        }`}>
          <span className="material-symbols-outlined text-sm font-black">
            {isNegative ? 'trending_down' : 'trending_up'}
          </span>
          {trend} <span className="opacity-60 ml-1">vs peak</span>
        </div>
      )}
    </div>
  );
}