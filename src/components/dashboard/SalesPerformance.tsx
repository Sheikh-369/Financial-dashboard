"use client";
import React, { useState } from 'react';

const weeklyData = [
  { day: 'MON', val: 40 },
  { day: 'TUE', val: 60 },
  { day: 'WED', val: 55 },
  { day: 'THU', val: 85 },
  { day: 'FRI', val: 70 },
  { day: 'SAT', val: 95 },
  { day: 'SUN', val: 65 },
];

export default function SalesPerformance() {
  const [view, setView] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col h-[450px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold font-headline text-slate-900">Sales Performance</h3>
          <p className="text-sm text-slate-500">Daily transaction volume for current billing period</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full">
          <button onClick={() => setView('weekly')} className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${view === 'weekly' ? 'bg-white shadow-sm' : 'text-slate-400'}`}>Weekly</button>
          <button onClick={() => setView('monthly')} className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${view === 'monthly' ? 'bg-white shadow-sm' : 'text-slate-400'}`}>Monthly</button>
        </div>
      </div>

      <div className="relative flex-1 flex items-end gap-4 px-2">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full border-b border-slate-50" />
          ))}
        </div>

        {/* The Bars */}
        {weeklyData.map((item) => (
          <div key={item.day} className="flex-1 flex flex-col items-center group z-10 h-full justify-end">
            <div 
              className="w-full bg-slate-100 group-hover:bg-slate-200 transition-all duration-500 rounded-t-sm flex flex-col justify-end"
              style={{ height: `${item.val}%` }} // Using inline style for guaranteed rendering
            >
              <div className="w-full h-1 bg-black" />
            </div>
            <span className="mt-4 text-[10px] font-bold tracking-widest text-slate-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}