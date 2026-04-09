// "use client";
// import React from 'react';

// export default function DispatchCenter() {
//   return (
//     <section className="bg-slate-50 dark:bg-[#132335] p-8 rounded-2xl border border-slate-200/50 dark:border-white/5 transition-colors">
//       <h3 className="text-lg font-black mb-6 tracking-tight dark:text-white">Dispatch Center</h3>
//       <div className="space-y-6">
//         {[
//           { title: "Ledger Updates", desc: "Daily transaction summaries", active: true },
//           { title: "Risk Alerts", desc: "Critical security pings", active: true },
//           { title: "Report Readiness", desc: "Monthly closing alerts", active: false },
//         ].map((item, idx) => (
//           <div key={idx} className="flex items-center justify-between">
//             <div className="space-y-1">
//               <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
//               <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400 dark:text-slate-500">{item.desc}</p>
//             </div>
//             <button 
//               className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
//                 item.active 
//                   ? 'bg-black dark:bg-white' 
//                   : 'bg-slate-300 dark:bg-[#0B1C30]'
//               }`}
//             >
//               <div className={`absolute top-1 w-4 h-4 bg-white dark:bg-[#0B1C30] rounded-full transition-transform duration-300 ${
//                 item.active ? 'translate-x-7' : 'translate-x-1'
//               }`} />
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5">
//         <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest mb-4">Digest Frequency</p>
//         {/* Added flex-nowrap to prevent the horizontal break seen in your screenshot */}
//         <div className="flex flex-nowrap gap-2">
//           {['Immediate', 'Daily', 'Weekly'].map((label) => (
//             <span 
//               key={label}
//               className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border cursor-pointer transition-all whitespace-nowrap ${
//                 label === 'Immediate' 
//                   ? 'bg-black dark:bg-white text-white dark:text-[#0B1C30] border-black dark:border-white' 
//                   : 'bg-white dark:bg-transparent text-slate-400 dark:text-slate-500 border-slate-200 dark:border-white/10 hover:border-slate-400'
//               }`}
//             >
//               {label}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//2nd
"use client";
import React from 'react';

export default function DispatchCenter() {
  return (
    <section className="bg-slate-50 dark:bg-[#132335] p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-white/5 transition-colors">
      <h3 className="text-lg font-black mb-6 tracking-tight dark:text-white">Dispatch Center</h3>
      <div className="space-y-5">
        {[
          { title: "Ledger Updates", desc: "Daily transaction summaries", active: true },
          { title: "Risk Alerts", desc: "Critical security pings", active: true },
          { title: "Report Readiness", desc: "Monthly closing alerts", active: false },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{item.title}</p>
              <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400 dark:text-slate-500 truncate">{item.desc}</p>
            </div>
            <button 
              className={`w-12 h-6 rounded-full relative flex-shrink-0 transition-colors duration-300 ${
                item.active 
                  ? 'bg-black dark:bg-white' 
                  : 'bg-slate-300 dark:bg-[#0B1C30]'
              }`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white dark:bg-[#0B1C30] rounded-full transition-transform duration-300 ${
                item.active ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
        <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest mb-4">Digest Frequency</p>
        <div className="flex flex-wrap gap-2">
          {['Immediate', 'Daily', 'Weekly'].map((label) => (
            <span 
              key={label}
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border cursor-pointer transition-all whitespace-nowrap ${
                label === 'Immediate' 
                  ? 'bg-black dark:bg-white text-white dark:text-[#0B1C30] border-black dark:border-white' 
                  : 'bg-white dark:bg-transparent text-slate-400 dark:text-slate-500 border-slate-200 dark:border-white/10 hover:border-slate-400'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}