// src/components/sales/SalesMetricCard.tsx
interface Props {
  title: string;
  value: string;
  progress?: number;
  trend?: string;
  isNegative?: boolean;
}

export default function SalesMetricCard({ title, value, progress, trend, isNegative }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
      <h4 className="text-2xl font-bold mt-2 text-slate-900">{value}</h4>
      
      {progress !== undefined && (
        <div className="mt-4 pt-4 border-t border-slate-50">
          <div className="flex justify-between items-center text-xs font-medium mb-1 text-slate-500">
            <span>Target</span>
            <span className="text-slate-900">{progress}%</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-black h-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {trend && (
        <p className={`text-xs mt-4 flex items-center gap-1 font-bold ${isNegative ? 'text-red-600' : 'text-emerald-600'}`}>
          <span className="material-symbols-outlined text-sm">
            {isNegative ? 'trending_down' : 'trending_up'}
          </span>
          {trend} from peak
        </p>
      )}
    </div>
  );
}