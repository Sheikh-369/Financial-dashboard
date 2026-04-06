// src/components/sales/SalesTrendChart.tsx
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
    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100/50 flex flex-col h-[450px]">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h4 className="text-xl font-extrabold tracking-tight text-slate-900">Monthly Sales Volume</h4>
          <p className="text-xs text-slate-500 font-medium">Regional performance distribution (FY26)</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest">DOMESTIC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest">GLOBAL</span>
          </div>
        </div>
      </div>

      {/* Graph Area */}
      <div className="flex-1 flex items-end justify-between gap-3 md:gap-4 px-2 pb-2">
        {data.map((item) => (
          <div key={item.month} className="flex-1 flex flex-col items-center group h-full justify-end">
            <div className="w-full flex flex-col justify-end h-full gap-1">
              {/* Global Bar (Top) */}
              <div 
                className="w-full bg-slate-200 group-hover:bg-slate-300 transition-all duration-500 rounded-sm" 
                style={{ height: `${item.global}%` }}
              />
              {/* Domestic Bar (Bottom) */}
              <div 
                className="w-full bg-black rounded-sm transition-all duration-500" 
                style={{ height: `${item.domestic}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-slate-400 mt-5 uppercase tracking-widest">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}