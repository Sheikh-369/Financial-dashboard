"use client";

interface Client {
  name: string;
  type: string;
  amount: string;
  img: string;
  status?: string;
}

const fullPipeline: Client[] = [
  { name: 'Vanguard Tech', type: 'Enterprise Subscription', amount: '$12,400', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vanguard', status: 'Active' },
  { name: 'Lumina Group', type: 'Asset Management', amount: '$8,290', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lumina', status: 'Pending' },
  { name: 'Nexus Retail', type: 'Logistics Core', amount: '$15,100', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nexus', status: 'Active' },
  { name: 'Aether Corp', type: 'Cloud Infrastructure', amount: '$22,500', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aether', status: 'Negotiation' },
  { name: 'Zenith Labs', type: 'Biotech Research', amount: '$11,200', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zenith', status: 'Active' },
];

export default function PipelineModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#132335] rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-white/10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Detailed Pipeline</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-black dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="overflow-y-auto pr-2 space-y-6 custom-scrollbar">
          {fullPipeline.map((client) => (
            <div key={client.name} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all">
              <div className="flex items-center gap-4">
                <img src={client.img} alt="" className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-[#0B1C30]" />
                <div>
                  <p className="font-black text-slate-900 dark:text-white leading-tight">{client.name}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{client.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-slate-900 dark:text-white">{client.amount}</p>
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400">
                  {client.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-10 py-5 bg-black dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-all shadow-lg"
        >
          Close Pipeline
        </button>
      </div>
    </div>
  );
}