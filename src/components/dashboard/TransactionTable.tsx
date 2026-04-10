// "use client";
// import { Transaction } from '@/src/types';

// const mockTransactions: Transaction[] = [
//   { id: '1', entity: 'Acme Corp.', subtext: 'Software License', status: 'Completed', method: 'Bank Transfer', date: 'Oct 24, 2023', amount: '$1,200.00', initials: 'AM' },
//   { id: '2', entity: 'Stripe Vendor', subtext: 'Card Processing', status: 'Pending', method: 'Credit Card', date: 'Oct 23, 2023', amount: '$450.12', initials: 'SV' },
//   { id: '3', entity: 'Urban Workspace', subtext: 'Office Rent', status: 'Completed', method: 'Auto-Pay', date: 'Oct 22, 2023', amount: '$3,500.00', initials: 'UW' },
//   { id: '4', entity: 'Digital Ocean', subtext: 'Cloud Infrastructure', status: 'Declined', method: 'Direct Debit', date: 'Oct 21, 2023', amount: '$84.00', initials: 'DL' },
// ];

// const TransactionTable = () => {
//   return (
//     <section className="bg-white dark:bg-[#132335] rounded-[2.5rem] shadow-sm overflow-hidden border border-slate-100 dark:border-white/5 transition-colors duration-500">
//       <div className="px-8 py-8 flex justify-between items-center">
//         <div>
//           <h3 className="text-xl font-black font-headline text-slate-900 dark:text-white">Recent Transactions</h3>
//           <p className="text-sm text-slate-500 dark:text-slate-400">Monitoring real-time financial flow</p>
//         </div>
//         <button className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white hover:opacity-70 transition-opacity">
//           View All Statement
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-slate-50/50 dark:bg-white/5">
//               <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Entity</th>
//               <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Status</th>
//               <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Method</th>
//               <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Date</th>
//               <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 text-right">Amount</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50 dark:divide-white/5">
//             {mockTransactions.map((tx) => (
//               <tr key={tx.id} className="hover:bg-slate-50/30 dark:hover:bg-white/5 transition-colors group">
//                 <td className="px-8 py-5">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#0B1C30] flex items-center justify-center font-black text-[11px] text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10">
//                       {tx.initials}
//                     </div>
//                     <div>
//                       <div className="text-sm font-black text-slate-900 dark:text-white">{tx.entity}</div>
//                       <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight">{tx.subtext}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-8 py-5">
//                   <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase ${getStatusStyles(tx.status)}`}>
//                     {tx.status}
//                   </span>
//                 </td>
//                 <td className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400 capitalize">{tx.method}</td>
//                 <td className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400">{tx.date}</td>
//                 <td className={`px-8 py-5 text-sm font-black text-right ${
//                   tx.status === 'Declined' 
//                     ? 'text-red-500' 
//                     : 'text-slate-900 dark:text-white'
//                 }`}>
//                   {tx.amount}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <button className="w-full py-6 bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border-t border-slate-50 dark:border-white/5">
//         Show More History
//       </button>
//     </section>
//   );
// };

// function getStatusStyles(status: string) {
//   switch (status) {
//     case 'Completed': 
//       return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400';
//     case 'Pending': 
//       return 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400';
//     case 'Declined': 
//       return 'bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400';
//     default: 
//       return 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400';
//   }
// }

// export default TransactionTable;

//2nd
"use client";
import React, { useState } from 'react';
import { Transaction } from '@/src/types';

const mockTransactions: Transaction[] = [
  { id: '1', entity: 'Acme Corp.', subtext: 'Software License', status: 'Completed', method: 'Bank Transfer', date: 'Oct 24, 2023', amount: '$1,200.00', initials: 'AM' },
  { id: '2', entity: 'Stripe Vendor', subtext: 'Card Processing', status: 'Pending', method: 'Credit Card', date: 'Oct 23, 2023', amount: '$450.12', initials: 'SV' },
  { id: '3', entity: 'Urban Workspace', subtext: 'Office Rent', status: 'Completed', method: 'Auto-Pay', date: 'Oct 22, 2023', amount: '$3,500.00', initials: 'UW' },
  { id: '4', entity: 'Digital Ocean', subtext: 'Cloud Infrastructure', status: 'Declined', method: 'Direct Debit', date: 'Oct 21, 2023', amount: '$84.00', initials: 'DL' },
  { id: '5', entity: 'Adobe Systems', subtext: 'Creative Suite', status: 'Completed', method: 'Credit Card', date: 'Oct 20, 2023', amount: '$52.99', initials: 'AS' },
  { id: '6', entity: 'Starbucks', subtext: 'Business Meeting', status: 'Completed', method: 'Apple Pay', date: 'Oct 20, 2023', amount: '$18.50', initials: 'SB' },
  { id: '7', entity: 'Amazon Web Services', subtext: 'Server Hosting', status: 'Pending', method: 'Auto-Pay', date: 'Oct 19, 2023', amount: '$210.00', initials: 'AW' },
  { id: '8', entity: 'Mailchimp', subtext: 'Marketing Automation', status: 'Completed', method: 'Credit Card', date: 'Oct 18, 2023', amount: '$45.00', initials: 'MC' },
  { id: '9', entity: 'Verizon Wireless', subtext: 'Communication', status: 'Completed', method: 'Bank Transfer', date: 'Oct 17, 2023', amount: '$190.00', initials: 'VW' },
  { id: '10', entity: 'Apple Inc.', subtext: 'Hardware Upgrade', status: 'Declined', method: 'Credit Card', date: 'Oct 16, 2023', amount: '$2,499.00', initials: 'AI' },
];

const TransactionTable = () => {
  const [showAll, setShowAll] = useState(false);

  // If showAll is true, show all 10. If false, show only 5.
  const displayedTransactions = showAll ? mockTransactions : mockTransactions.slice(0, 5);

  return (
    <section className="bg-white dark:bg-[#132335] rounded-[2.5rem] shadow-sm overflow-hidden border border-slate-100 dark:border-white/5 transition-colors duration-500">
      <div className="px-8 py-8 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-black font-headline text-slate-900 dark:text-white">Recent Transactions</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Monitoring real-time financial flow</p>
        </div>
        
        {/* Changed from Link to Button to keep user on the dashboard */}
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
        >
          {showAll ? 'Show Less' : 'View All Statement'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-white/5">
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Entity</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Status</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Method</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Date</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-white/5">
            {displayedTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50/30 dark:hover:bg-white/5 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#0B1C30] flex items-center justify-center font-black text-[11px] text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10">
                      {tx.initials}
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900 dark:text-white">{tx.entity}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight">{tx.subtext}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase ${getStatusStyles(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400 capitalize">{tx.method}</td>
                <td className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400">{tx.date}</td>
                <td className={`px-8 py-5 text-sm font-black text-right ${
                  tx.status === 'Declined' 
                    ? 'text-red-500' 
                    : 'text-slate-900 dark:text-white'
                }`}>
                  {tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button 
        onClick={() => setShowAll(!showAll)}
        className="w-full py-6 bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border-t border-slate-50 dark:border-white/5"
      >
        {showAll ? 'Collapse History' : 'Show More History'}
      </button>
    </section>
  );
};

function getStatusStyles(status: string) {
  switch (status) {
    case 'Completed': 
      return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400';
    case 'Pending': 
      return 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400';
    case 'Declined': 
      return 'bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400';
    default: 
      return 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400';
  }
}

export default TransactionTable;