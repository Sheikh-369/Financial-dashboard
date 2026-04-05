// src/components/StatCard.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: string;
  variant?: 'primary' | 'secondary' | 'error';
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon, variant = 'primary' }) => {
  const iconMap: Record<string, string> = {
    primary: 'text-slate-400',
    secondary: 'text-secondary',
    error: 'text-error',
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl flex flex-col justify-between min-h-[140px] border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{title}</span>
        <span className={`material-symbols-outlined ${iconMap[variant]}`}>{icon}</span>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold font-headline tracking-tight">{value}</h3>
        <p className={`text-[11px] font-medium mt-1 ${variant === 'error' ? 'text-error' : 'text-secondary'}`}>
          {trend}
        </p>
      </div>
    </div>
  );
};