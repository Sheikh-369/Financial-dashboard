"use client";
import React from 'react';

const transactions = [
  { id: 'TXN-098421', client: 'Stellar Dynamics', date: 'Oct 24, 2026', status: 'SETTLED', amount: '$42,500.00' },
  { id: 'TXN-098420', client: 'Horizon Logistics', date: 'Oct 23, 2026', status: 'PENDING', amount: '$12,800.00' },
  { id: 'TXN-098419', client: 'Apex Architectural', date: 'Oct 22, 2026', status: 'SETTLED', amount: '$8,120.00' },
  { id: 'TXN-098418', client: 'Kinetix Bio', date: 'Oct 21, 2026', status: 'FLAGGED', amount: '$19,400.00' },
];

export default function SalesTransactionTable() {
  return (
    <div className="space-y-6">
      {/* Header section: Stacks on mobile, side-by-side on tablet+ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <h3 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
          Recent Transactions
        </h3>
        <div className="flex gap-2">
          <button className="flex-1 sm:flex-none flex items-center justify-center bg-white dark:bg-[#132335] border border-slate-200 dark:border-white/5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm mr-2">filter_list</span>
            Filter
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center bg-white dark:bg-[#132335] border border-slate-200 dark:border-white/5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm">
            Sort: Newest
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden transition-all duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5">
                {/* ID: Hidden on mobile, shown on Medium screens+ */}
                <th className="hidden md:table-cell px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Transaction ID</th>
                
                {/* Client: Always shown, padding shrinks on mobile */}
                <th className="px-5 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Client Entity</th>
                
                {/* Date: Hidden on mobile, shown on Large screens+ */}
                <th className="hidden lg:table-cell px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Date</th>
                
                <th className="px-5 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Status</th>
                
                <th className="px-5 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                  {/* ID Column */}
                  <td className="hidden md:table-cell px-8 py-5 text-xs font-bold font-mono text-slate-500 dark:text-slate-400">{txn.id}</td>
                  
                  {/* Client Column */}
                  <td className="px-5 md:px-8 py-5">
                    <span className="text-sm font-black text-slate-900 dark:text-white group-hover:underline underline-offset-4 decoration-2">{txn.client}</span>
                  </td>
                  
                  {/* Date Column */}
                  <td className="hidden lg:table-cell px-8 py-5 text-[11px] font-bold uppercase tracking-tight text-slate-400 dark:text-slate-500">{txn.date}</td>
                  
                  {/* Status Column */}
                  <td className="px-5 md:px-8 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase ${getStatusStyles(txn.status)}`}>
                      {txn.status}
                    </span>
                  </td>
                  
                  {/* Amount Column */}
                  <td className="px-5 md:px-8 py-5 text-sm font-black text-right text-slate-900 dark:text-white">
                    {txn.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function getStatusStyles(status: string) {
  switch (status) {
    case 'SETTLED': 
      return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400';
    case 'PENDING': 
      return 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400';
    case 'FLAGGED': 
      return 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400';
    default: 
      return 'bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400';
  }
}