// src/app/sales/page.tsx

import HighValueClients from "@/src/components/sales/HighValueClients";
import SalesMetricCard from "@/src/components/sales/SalesMetricCard";
import SalesTransactionTable from "@/src/components/sales/SalesTransactionTable";
import SalesTrendChart from "@/src/components/sales/SalesTrendChart";

export default function SalesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
      
      {/* 1. Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Performance Ledger</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Sales Overview</h2>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-100 px-4 py-2 rounded-lg flex items-center gap-2 border border-slate-200/50">
            <span className="material-symbols-outlined text-sm text-slate-500">calendar_today</span>
            <span className="text-sm font-semibold text-slate-900">Oct 1 - Oct 31, 2026</span>
          </div>
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export
          </button>
        </div>
      </div>

      {/* 2. Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[200px]">
          <div>
            <p className="text-sm font-semibold text-slate-500">Gross Sales Revenue</p>
            <h3 className="text-5xl font-black tracking-tighter mt-2 text-slate-900">$1,284,500.00</h3>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full">+12.4%</span>
            <p className="text-xs text-slate-400 font-medium">vs. previous month ($1.14M)</p>
          </div>
        </div>
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