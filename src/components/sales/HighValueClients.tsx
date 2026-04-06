"use client";
import React from 'react';

const clients = [
  { 
    name: 'Vanguard Tech', 
    type: 'Enterprise Subscription', 
    amount: '$12,400', 
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vanguard' 
  },
  { 
    name: 'Lumina Group', 
    type: 'Asset Management', 
    amount: '$8,290', 
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lumina' 
  },
  { 
    name: 'Nexus Retail', 
    type: 'Logistics Core', 
    amount: '$15,100', 
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nexus' 
  },
];

export default function HighValueClients() {
  return (
    <div className="bg-white dark:bg-[#132335] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm h-full flex flex-col transition-colors duration-500">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-10">
        High Value Clients
      </h4>
      
      <div className="space-y-8 flex-1">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              {/* Avatar Container - Dimmed in Dark Mode */}
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#0B1C30] overflow-hidden border border-slate-200/50 dark:border-white/10 transition-colors">
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="w-full h-full object-cover dark:opacity-80 grayscale-[0.2] dark:grayscale-0" 
                />
              </div>
              <div>
                <p className="text-sm font-black leading-tight text-slate-900 dark:text-white transition-colors">
                  {client.name}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight mt-0.5">
                  {client.type}
                </p>
              </div>
            </div>
            <span className="text-sm font-black text-slate-900 dark:text-white transition-colors">
              {client.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button - Flipped for Dark Mode */}
      <button className="w-full mt-10 py-4 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-slate-200/50 dark:border-white/5 active:scale-[0.98]">
        View Detailed Pipeline
      </button>
    </div>
  );
}