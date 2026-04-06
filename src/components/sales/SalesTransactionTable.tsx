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
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold tracking-tight text-slate-900">Recent Transactions</h3>
        <div className="flex gap-3">
          <button className="flex items-center bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined text-sm mr-2">filter_list</span>
            Filter
          </button>
          <button className="flex items-center bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">
            Sort: Newest
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Transaction ID</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Client Entity</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 text-xs font-bold font-mono text-slate-500">{txn.id}</td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-slate-900">{txn.client}</span>
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-slate-400">{txn.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black ${getStatusStyles(txn.status)}`}>
                    {txn.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-black text-right text-slate-900 group-hover:underline decoration-2">
                  {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getStatusStyles(status: string) {
  switch (status) {
    case 'SETTLED': return 'bg-emerald-50 text-emerald-700';
    case 'PENDING': return 'bg-slate-100 text-slate-500';
    case 'FLAGGED': return 'bg-red-50 text-red-700';
    default: return 'bg-slate-50 text-slate-500';
  }
}