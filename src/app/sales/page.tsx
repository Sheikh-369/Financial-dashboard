// src/app/sales/page.tsx
import HighValueClients from "@/src/components/sales/HighValueClients";
import SalesMetricCard from "@/src/components/sales/SalesMetricCard";
import SalesTransactionTable from "@/src/components/sales/SalesTransactionTable";
import SalesTrendChart from "@/src/components/sales/SalesTrendChart";

export default function SalesPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
      
      {/* 1. Page Header */}
        <div className="flex flex-wrap gap-2">        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 transition-colors">Performance Ledger</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">Sales Overview</h2>
        </div>
        <div className="flex gap-2">
          {/* Date Picker Container */}
          <div className="bg-slate-100 dark:bg-[#132335] px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-200/50 dark:border-white/5 transition-colors">
            <span className="material-symbols-outlined text-sm text-slate-500 dark:text-slate-400">calendar_today</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">Oct 1 - Oct 31, 2026</span>
          </div>
          {/* Export Button */}
          <button className="bg-white dark:bg-[#132335] border border-slate-200 dark:border-white/5 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-95 shadow-sm">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export
          </button>
        </div>
      </div>

      {/* 2. Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main Revenue Card */}
        <div className="md:col-span-2 bg-white dark:bg-[#132335] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col justify-between min-h-[220px] transition-all">
          <div>
            <p className="text-3xl font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px]">Gross Sales Revenue</p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mt-4 text-slate-900 dark:text-white">$1,284,500.00</h3>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-black rounded-full transition-colors">+12.4%</span>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-tight">vs. previous month ($1.14M)</p>
          </div>
        </div>
        
        {/* Sub-Metric Cards - Ensure these also have dark logic inside them */}
        <SalesMetricCard title="Net Sales" value="$942,310" progress={84} />
        <SalesMetricCard title="Transactions" value="12,842" trend="-2.1%" isNegative />
      </div>

      {/* 3. Charts & Clients Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <SalesTrendChart />
        </div>
        <div className="lg:col-span-4">
          <HighValueClients />
        </div>
      </div>

      {/* 4. Transactions Table */}
      <SalesTransactionTable />
    </div>
  );
}