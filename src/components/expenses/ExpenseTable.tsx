// "use client";
// import React from 'react';

// const disbursements = [
//   { vendor: 'Amazon Web Services', purpose: 'Infrastructure Hosting', cat: 'Technology', date: 'Oct 24, 2026', amount: '$12,450.00', status: 'Cleared', icon: 'cloud' },
//   { vendor: 'Meta Platforms Inc.', purpose: 'Q4 Ad Campaigns', cat: 'Marketing', date: 'Oct 22, 2026', amount: '$4,200.00', status: 'Cleared', icon: 'campaign' },
//   { vendor: 'WeWork Offices', purpose: 'Dublin Hub Rental', cat: 'Operations', date: 'Oct 20, 2026', amount: '$8,100.00', status: 'Pending', icon: 'work' },
//   { vendor: 'The Ritz-Carlton', purpose: 'Executive Dinner', cat: 'Events', date: 'Oct 18, 2026', amount: '$2,850.15', status: 'Flagged', icon: 'restaurant' },
// ];

// export default function ExpenseTable() {
//   return (
//     <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-500">
//       <div className="p-5 md:p-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-slate-50 dark:border-white/5">
//         <h4 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Recent Disbursements</h4>
//         <div className="flex gap-3">
//           <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] rounded-xl transition-all active:scale-95 shadow-lg shadow-black/5">
//             All
//           </button>
//           <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors">
//             Pending
//           </button>
//         </div>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-slate-50/50 dark:bg-white/5 transition-colors">
//               <th className="px-5 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Vendor / Purpose</th>
//               <th className="hidden md:table-cell px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Category</th>
//               <th className="hidden lg:table-cell px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Date</th>
//               <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-right">Amount</th>
//               <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-center">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50 dark:divide-white/5">
//             {disbursements.map((item, i) => (
//               <tr key={i} className="hover:bg-slate-50/30 dark:hover:bg-white/5 transition-colors group">
//                 <td className="px-5 md:px-8 py-6">
//                   <div className="flex items-center gap-3 md:gap-5">
//                     <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-2xl bg-slate-50 dark:bg-[#0B1C30] flex items-center justify-center border border-slate-100 dark:border-white/10 transition-colors">
//                       <span className="material-symbols-outlined text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors">
//                         {item.icon}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="font-black text-sm text-slate-900 dark:text-white transition-colors">{item.vendor}</p>
//                       <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight mt-0.5">{item.purpose}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="hidden md:table-cell px-4 md:px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">{item.cat}</td>
//                 <td className="hidden lg:table-cell px-4 md:px-8 py-6 text-xs font-bold text-slate-400 dark:text-slate-500">{item.date}</td>
//                 <td className="px-4 md:px-8 py-6 text-sm font-black text-right text-slate-900 dark:text-white">{item.amount}</td>
//                 <td className="px-4 md:px-8 py-6 text-center">
//                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
//                     item.status === 'Cleared' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 
//                     item.status === 'Pending' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' : 
//                     'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
//                   }`}>
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


//2nd
"use client";
import React, { useState, useMemo } from 'react';

const disbursements = [
  { vendor: 'Amazon Web Services', purpose: 'Infrastructure Hosting', cat: 'Technology', date: 'Oct 24, 2026', amount: '$12,450.00', status: 'Cleared', icon: 'cloud' },
  { vendor: 'Meta Platforms Inc.', purpose: 'Q4 Ad Campaigns', cat: 'Marketing', date: 'Oct 22, 2026', amount: '$4,200.00', status: 'Cleared', icon: 'campaign' },
  { vendor: 'WeWork Offices', purpose: 'Dublin Hub Rental', cat: 'Operations', date: 'Oct 20, 2026', amount: '$8,100.00', status: 'Pending', icon: 'work' },
  { vendor: 'The Ritz-Carlton', purpose: 'Executive Dinner', cat: 'Events', date: 'Oct 18, 2026', amount: '$2,850.15', status: 'Flagged', icon: 'restaurant' },
  { vendor: 'Google Cloud', purpose: 'API Usage', cat: 'Technology', date: 'Oct 17, 2026', amount: '$1,100.00', status: 'Pending', icon: 'api' },
  { vendor: 'Stripe', purpose: 'Processing Fees', cat: 'Finance', date: 'Oct 16, 2026', amount: '$840.50', status: 'Cleared', icon: 'payments' },
];

export default function ExpenseTable() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Pending'>('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredData = useMemo(() => {
    const data = activeFilter === 'All' 
      ? disbursements 
      : disbursements.filter(item => item.status === 'Pending');
    
    return isExpanded ? data : data.slice(0, 4);
  }, [activeFilter, isExpanded]);

  return (
    <div className="bg-white dark:bg-[#132335] rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-500">
      
      {/* Header */}
      <div className="p-5 md:p-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-slate-50 dark:border-white/5">
        <h4 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Recent Disbursements</h4>
        <div className="flex bg-slate-50 dark:bg-[#0B1C30] p-1 rounded-2xl border border-slate-100 dark:border-white/5 w-fit">
          <button 
            onClick={() => setActiveFilter('All')}
            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
              activeFilter === 'All' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] shadow-lg' 
                : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('Pending')}
            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
              activeFilter === 'Pending' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] shadow-lg' 
                : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Table Container - scrollbar-hide ensures clean look on mobile */}
      <div className="overflow-x-auto scrollbar-hide relative">
        <table className="w-full text-left min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-white/5">
              <th className="px-5 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Vendor / Purpose</th>
              <th className="hidden md:table-cell px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Category</th>
              <th className="hidden lg:table-cell px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Date</th>
              <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-right">Amount</th>
              <th className="px-4 md:px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-white/5">
            {filteredData.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/30 dark:hover:bg-white/5 transition-colors group">
                <td className="px-5 md:px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 rounded-2xl bg-slate-50 dark:bg-[#0B1C30] flex items-center justify-center border border-slate-100 dark:border-white/10">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-black text-sm text-slate-900 dark:text-white truncate max-w-[120px] sm:max-w-none">{item.vendor}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight">{item.purpose}</p>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell px-4 md:px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">{item.cat}</td>
                <td className="hidden lg:table-cell px-4 md:px-8 py-6 text-xs font-bold text-slate-400 dark:text-slate-500">{item.date}</td>
                <td className="px-4 md:px-8 py-6 text-sm font-black text-right text-slate-900 dark:text-white">{item.amount}</td>
                <td className="px-4 md:px-8 py-6 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    item.status === 'Cleared' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 
                    item.status === 'Pending' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' : 
                    'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FIXED MOBILE BUTTON: relative z-20 and block display ensures it captures touch events */}
      <button 
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ touchAction: 'manipulation' }}
        className="relative z-20 block w-full py-6 bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border-t border-slate-50 dark:border-white/5 active:bg-slate-200 dark:active:bg-white/20 text-center"
      >
        {isExpanded ? 'Collapse Ledger' : 'View Full Ledger'}
      </button>
    </div>
  );
}