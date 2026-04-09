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
    <div className="bg-white dark:bg-[#132335] p-6 md:p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm h-full flex flex-col transition-colors duration-500">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-8 md:mb-10">
        High Value Clients
      </h4>
      
      <div className="space-y-6 md:space-y-8 flex-1">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-between group gap-2">
            <div className="flex items-center gap-3 md:gap-4 min-w-0">
              {/* Avatar Container - Responsive scaling */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-2xl bg-slate-100 dark:bg-[#0B1C30] overflow-hidden border border-slate-200/50 dark:border-white/10 transition-colors">
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="w-full h-full object-cover dark:opacity-80 grayscale-[0.2] dark:grayscale-0" 
                />
              </div>
              
              {/* Text Container - min-w-0 prevents text from pushing the amount off-screen */}
              <div className="min-w-0">
                <p className="text-sm font-black leading-tight text-slate-900 dark:text-white transition-colors truncate">
                  {client.name}
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight mt-0.5 truncate">
                  {client.type}
                </p>
              </div>
            </div>

            {/* Amount - flex-shrink-0 ensures the price never squishes */}
            <span className="text-sm font-black text-slate-900 dark:text-white transition-colors flex-shrink-0">
              {client.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button - Slightly smaller padding for tablet comfort */}
      <button className="w-full mt-8 md:mt-10 py-3.5 md:py-4 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-slate-200/50 dark:border-white/5 active:scale-[0.98]">
        View Detailed Pipeline
      </button>
    </div>
  );
}