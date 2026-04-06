"use client";
import React from 'react';

const data = [
  { month: 'JAN', domestic: 20, global: 40 },
  { month: 'FEB', domestic: 25, global: 45 },
  { month: 'MAR', domestic: 35, global: 55 },
  { month: 'APR', domestic: 40, global: 70 },
  { month: 'MAY', domestic: 50, global: 85 },
  { month: 'JUN', domestic: 30, global: 60 },
  { month: 'JUL', domestic: 65, global: 95 },
];

export default function SalesTrendChart() {
  return (
    <div className="bg-white dark:bg-[#132335] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col h-[480px] transition-all duration-500">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h4 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Monthly Sales Volume</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mt-1">Regional performance distribution (FY26)</p>
        </div>
        
        {/* Legend */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.1)]"></span>
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]">DOMESTIC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10"></span>
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]">GLOBAL</span>
          </div>
        </div>
      </div>

      {/* Graph Area */}
      <div className="flex-1 flex items-end justify-between gap-3 md:gap-6 px-2 pb-2">
        {data.map((item) => (
          <div key={item.month} className="flex-1 flex flex-col items-center group h-full justify-end">
            <div className="w-full flex flex-col justify-end h-full gap-1.5">
              {/* Global Bar (Top Layer) */}
              <div 
                className="w-full bg-slate-100 dark:bg-white/5 group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-all duration-500 rounded-sm" 
                style={{ height: `${item.global}%` }}
              />
              {/* Domestic Bar (Core Layer) */}
              <div 
                className="w-full bg-black dark:bg-white rounded-sm transition-all duration-500 shadow-sm" 
                style={{ height: `${item.domestic}%` }}
              />
            </div>
            {/* Label */}
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 mt-6 uppercase tracking-[0.2em]">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}