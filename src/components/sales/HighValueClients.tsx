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
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full">
      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
        High Value Clients
      </h4>
      
      <div className="space-y-8">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200/50">
                <img src={client.img} alt={client.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight text-slate-900">{client.name}</p>
                <p className="text-[10px] text-slate-500 font-medium">{client.type}</p>
              </div>
            </div>
            <span className="text-sm font-black text-slate-900">{client.amount}</span>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 py-3 bg-slate-50 text-slate-900 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors border border-slate-200/50">
        View Detailed Pipeline
      </button>
    </div>
  );
}