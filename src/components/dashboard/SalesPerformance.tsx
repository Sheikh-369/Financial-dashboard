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
    // 1. Updated Container Background & Border
    <div className="lg:col-span-2 bg-white dark:bg-[#132335] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col h-[480px] transition-colors duration-500">
      <div className="flex justify-between items-start mb-10">
        <div>
          {/* 2. Text Color Transition */}
          <h3 className="text-lg font-black font-headline text-slate-900 dark:text-white">Sales Performance</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {view === 'weekly' ? 'Daily' : 'Monthly'} transaction volume for current period
          </p>
        </div>
        
        {/* 3. View Switcher Background */}
        <div className="flex bg-slate-100 dark:bg-[#0B1C30] p-1 rounded-full transition-colors">
          <button 
            onClick={() => setView('weekly')} 
            className={`px-5 py-1.5 text-xs font-black rounded-full transition-all duration-300 ${
              view === 'weekly' 
                ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setView('monthly')} 
            className={`px-5 py-1.5 text-xs font-black rounded-full transition-all duration-300 ${
              view === 'monthly' 
                ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="relative flex-1 flex items-end gap-3 md:gap-5 px-2">
        {/* Background Grid Lines - Subtler in Dark Mode */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full border-b border-slate-50 dark:border-white/5" />
          ))}
        </div>

        {/* Animated Bars */}
        {activeData.map((item) => (
          <div key={item.label} className="flex-1 flex flex-col items-center group z-10 h-full justify-end">
            <div 
              // 4. Bar Color Logic
              className="w-full bg-slate-100 dark:bg-white/5 group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-all duration-700 ease-in-out rounded-t-sm flex flex-col justify-end overflow-hidden"
              style={{ height: `${item.val}%` }} 
            >
              {/* 5. Bar Cap - Black in Light, White in Dark */}
              <div className="w-full h-1.5 bg-black dark:bg-white" />
            </div>
            {/* Label Text */}
            <span className="mt-5 text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}