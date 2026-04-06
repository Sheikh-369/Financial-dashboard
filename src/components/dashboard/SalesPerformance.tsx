// "use client";
// import React, { useState } from 'react';

// const weeklyData = [
//   { day: 'MON', val: 40 },
//   { day: 'TUE', val: 60 },
//   { day: 'WED', val: 55 },
//   { day: 'THU', val: 85 },
//   { day: 'FRI', val: 70 },
//   { day: 'SAT', val: 95 },
//   { day: 'SUN', val: 65 },
// ];

// export default function SalesPerformance() {
//   const [view, setView] = useState<'weekly' | 'monthly'>('weekly');

//   return (
//     <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col h-[450px]">
//       <div className="flex justify-between items-start mb-8">
//         <div>
//           <h3 className="text-lg font-bold font-headline text-slate-900">Sales Performance</h3>
//           <p className="text-sm text-slate-500">Daily transaction volume for current billing period</p>
//         </div>
//         <div className="flex bg-slate-100 p-1 rounded-full">
//           <button onClick={() => setView('weekly')} className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${view === 'weekly' ? 'bg-white shadow-sm' : 'text-slate-400'}`}>Weekly</button>
//           <button onClick={() => setView('monthly')} className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${view === 'monthly' ? 'bg-white shadow-sm' : 'text-slate-400'}`}>Monthly</button>
//         </div>
//       </div>

//       <div className="relative flex-1 flex items-end gap-4 px-2">
//         {/* Background Grid Lines */}
//         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="w-full border-b border-slate-50" />
//           ))}
//         </div>

//         {/* The Bars */}
//         {weeklyData.map((item) => (
//           <div key={item.day} className="flex-1 flex flex-col items-center group z-10 h-full justify-end">
//             <div 
//               className="w-full bg-slate-100 group-hover:bg-slate-200 transition-all duration-500 rounded-t-sm flex flex-col justify-end"
//               style={{ height: `${item.val}%` }} // Using inline style for guaranteed rendering
//             >
//               <div className="w-full h-1 bg-black" />
//             </div>
//             <span className="mt-4 text-[10px] font-bold tracking-widest text-slate-400">
//               {item.day}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//2nd
"use client";
import { ChartData, ViewType } from '@/src/types';
import React, { useState } from 'react';

const weeklyData: ChartData[] = [
  { label: 'MON', val: 40 }, { label: 'TUE', val: 60 }, { label: 'WED', val: 55 },
  { label: 'THU', val: 85 }, { label: 'FRI', val: 70 }, { label: 'SAT', val: 95 }, { label: 'SUN', val: 65 },
];

const monthlyData: ChartData[] = [
  { label: 'JAN', val: 75 }, { label: 'FEB', val: 45 }, { label: 'MAR', val: 90 },
  { label: 'APR', val: 35 }, { label: 'MAY', val: 65 }, { label: 'JUN', val: 80 }, { label: 'JUL', val: 55 },
];

export default function SalesPerformance() {
  const [view, setView] = useState<ViewType>('weekly');
  const activeData = view === 'weekly' ? weeklyData : monthlyData;

  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col h-[480px]">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-lg font-bold font-headline text-slate-900">Sales Performance</h3>
          <p className="text-sm text-slate-500">
            {view === 'weekly' ? 'Daily' : 'Monthly'} transaction volume for current period
          </p>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-full">
          <button 
            onClick={() => setView('weekly')} 
            className={`px-5 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
              view === 'weekly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setView('monthly')} 
            className={`px-5 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
              view === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="relative flex-1 flex items-end gap-3 md:gap-5 px-2">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full border-b border-slate-50" />
          ))}
        </div>

        {/* Animated Bars */}
        {activeData.map((item) => (
          <div key={item.label} className="flex-1 flex flex-col items-center group z-10 h-full justify-end">
            <div 
              className="w-full bg-slate-100 group-hover:bg-slate-200 transition-all duration-700 ease-in-out rounded-t-sm flex flex-col justify-end overflow-hidden"
              style={{ height: `${item.val}%` }} 
            >
              <div className="w-full h-1.5 bg-black" />
            </div>
            <span className="mt-5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}