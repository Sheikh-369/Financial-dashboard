// "use client";

// export default function CategoryAllocation() {
//   const categories = [
//     { name: 'Payroll & Benefits', percent: 35, color: 'bg-black dark:bg-white' },
//     { name: 'Infrastructure', percent: 25, color: 'bg-emerald-600 dark:bg-emerald-500' },
//     { name: 'Marketing', percent: 25, color: 'bg-slate-400 dark:bg-white/20' },
//     { name: 'Operations', percent: 15, color: 'bg-slate-200 dark:bg-white/5' },
//   ];

//   // Dynamic conic-gradient for Light vs Dark
//   // Light: Black, Emerald, Slate-400, Slate-200
//   // Dark: White, Emerald-500, White/20, White/5
//   const lightGradient = 'conic-gradient(#000 0% 35%, #059669 35% 60%, #94a3b8 60% 85%, #e2e8f0 85% 100%)';
//   const darkGradient = 'conic-gradient(#fff 0% 35%, #10b981 35% 60%, rgba(255,255,255,0.2) 60% 85%, rgba(255,255,255,0.05) 85% 100%)';

  
//   return (
//     <div className="bg-white dark:bg-[#132335] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm h-full flex flex-col transition-all duration-500">
//       <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-10 transition-colors">
//         Category Allocation
//       </h4>
      
//       <div className="relative w-48 h-48 mx-auto mb-12 group">
//         {/* The Chart Ring */}
//         <div 
//           className="w-full h-full rounded-full transition-all duration-700 ease-in-out" 
//           style={{ background: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? darkGradient : lightGradient }}
//         />
        
//         {/* The Inner Hole - Logic-based switching */}
//         <div className="absolute inset-5 bg-white dark:bg-[#132335] rounded-full flex items-center justify-center border-4 border-slate-50/50 dark:border-white/5 shadow-inner transition-colors duration-500">
//           <div className="text-center">
//             <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">Top Spend</p>
//             <p className="text-lg font-black text-slate-900 dark:text-white transition-colors">Payroll</p>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-6 flex-1">
//         {categories.map((cat) => (
//           <div key={cat.name} className="flex items-center justify-between group cursor-default">
//             <div className="flex items-center gap-4">
//               <span className={`w-3 h-3 rounded-full ${cat.color} transition-all duration-500 shadow-sm`}></span>
//               <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white transition-colors">
//                 {cat.name}
//               </span>
//             </div>
//             <span className="text-sm font-black text-slate-900 dark:text-white transition-colors">
//               {cat.percent}%
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//2nd
// "use client";
// import { useEffect, useState } from "react"; // 1. Add these
// import { useTheme } from "next-themes";      // 2. Add this

// export default function CategoryAllocation() {
//   // 3. Create a 'mounted' state
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   // 4. Set mounted to true once the component loads in the browser
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const categories = [
//     { name: 'Payroll & Benefits', percent: 35, color: 'bg-black dark:bg-white' },
//     { name: 'Infrastructure', percent: 25, color: 'bg-emerald-600 dark:bg-emerald-500' },
//     { name: 'Marketing', percent: 25, color: 'bg-slate-400 dark:bg-white/20' },
//     { name: 'Operations', percent: 15, color: 'bg-slate-200 dark:bg-white/5' },
//   ];

//   const lightGradient = 'conic-gradient(#000 0% 35%, #059669 35% 60%, #94a3b8 60% 85%, #e2e8f0 85% 100%)';
//   const darkGradient = 'conic-gradient(#fff 0% 35%, #10b981 35% 60%, rgba(255,255,255,0.2) 60% 85%, rgba(255,255,255,0.05) 85% 100%)';

//   // 5. IMPORTANT: If not mounted yet, show a simple placeholder or empty ring
//   // This prevents the "Mismatch" because the Server and Client will both see this first.
//   if (!mounted) {
//     return <div className="h-full w-full bg-white dark:bg-[#132335] animate-pulse rounded-[2.5rem]" />;
//   }

//   return (
//     <div className="bg-white dark:bg-[#132335] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm h-full flex flex-col transition-all duration-500">
//       <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-10 transition-colors">
//         Category Allocation
//       </h4>
      
//       <div className="relative w-48 h-48 mx-auto mb-12 group">
//         <div 
//           className="w-full h-full rounded-full transition-all duration-700 ease-in-out" 
//           // 6. Use the 'theme' variable from useTheme() now that it's safe!
//           style={{ background: theme === 'dark' ? darkGradient : lightGradient }}
//         />
        
//         <div className="absolute inset-5 bg-white dark:bg-[#132335] rounded-full flex items-center justify-center border-4 border-slate-50/50 dark:border-white/5 shadow-inner transition-colors duration-500">
//           <div className="text-center">
//             <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">Top Spend</p>
//             <p className="text-lg font-black text-slate-900 dark:text-white transition-colors">Payroll</p>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-6 flex-1">
//         {categories.map((cat) => (
//           <div key={cat.name} className="flex items-center justify-between group cursor-default">
//             <div className="flex items-center gap-4">
//               <span className={`w-3 h-3 rounded-full ${cat.color} transition-all duration-500 shadow-sm`}></span>
//               <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white transition-colors">
//                 {cat.name}
//               </span>
//             </div>
//             <span className="text-sm font-black text-slate-900 dark:text-white transition-colors">
//               {cat.percent}%
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//3rd
"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// --- MAIN COMPONENT ---
export default function CategoryAllocation() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  // Modal States
  const [activeModal, setActiveModal] = useState<'ledger' | 'policy' | 'detail' | null>(null);
  const [selectedCat, setSelectedCat] = useState<any>(null);

  useEffect(() => { setMounted(true); }, []);

  const categories = [
    { name: 'Payroll & Benefits', percent: 35, color: 'bg-black dark:bg-white', desc: 'Salaries and global insurance.' },
    { name: 'Infrastructure', percent: 25, color: 'bg-emerald-600 dark:bg-emerald-500', desc: 'AWS Hosting and security.' },
    { name: 'Marketing', percent: 25, color: 'bg-slate-400 dark:bg-white/20', desc: 'Ad spend and brand assets.' },
    { name: 'Operations', percent: 15, color: 'bg-slate-200 dark:bg-white/5', desc: 'Office and software licenses.' },
  ];

  if (!mounted) return <div className="h-64 w-full bg-white dark:bg-[#132335] animate-pulse rounded-[2.5rem]" />;

  const gradients = {
    light: 'conic-gradient(#000 0% 35%, #059669 35% 60%, #94a3b8 60% 85%, #e2e8f0 85% 100%)',
    dark: 'conic-gradient(#fff 0% 35%, #10b981 35% 60%, rgba(255,255,255,0.2) 60% 85%, rgba(255,255,255,0.05) 85% 100%)'
  };

  return (
    <div className="space-y-6">
      {/* 1. The Trigger Buttons (Download / Policy) */}
      <div className="flex gap-3 relative z-10">
        <button 
          type="button"
          onClick={() => setActiveModal('ledger')}
          className="flex-1 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-xl active:scale-95 transition-all shadow-lg"
        >
          Download Ledger
        </button>
        <button 
          type="button"
          onClick={() => setActiveModal('policy')}
          className="flex-1 px-6 py-3 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all"
        >
          Review Policy
        </button>
      </div>

      {/* 2. The Allocation Card (Fixed h-fit to stop stretching) */}
      <div className="bg-white dark:bg-[#132335] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm h-fit flex flex-col transition-all duration-500">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-10">Category Allocation</h4>
        
        <div className="relative w-48 h-48 mx-auto mb-12 group">
          <div className="w-full h-full rounded-full transition-all duration-700" 
               style={{ background: theme === 'dark' ? gradients.dark : gradients.light }} />
          <div className="absolute inset-5 bg-white dark:bg-[#132335] rounded-full flex items-center justify-center border-4 border-slate-50/50 dark:border-white/5 shadow-inner">
            <div className="text-center">
              <p className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">Top Spend</p>
              <p className="text-lg font-black text-slate-900 dark:text-white">Payroll</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {categories.map((cat) => (
            <button 
              key={cat.name} 
              type="button"
              onClick={() => { setSelectedCat(cat); setActiveModal('detail'); }}
              className="w-full flex items-center justify-between group active:scale-95 transition-transform outline-none"
            >
              <div className="flex items-center gap-4">
                <span className={`w-3 h-3 rounded-full ${cat.color} shadow-sm`}></span>
                <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white">{cat.name}</span>
              </div>
              <span className="text-sm font-black text-slate-900 dark:text-white">{cat.percent}%</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Modal Overlays */}
      {activeModal === 'detail' && selectedCat && (
        <ModalWrapper onClose={() => setActiveModal(null)} title={selectedCat.name}>
           <p className="text-slate-500 text-sm mb-8 leading-relaxed">{selectedCat.desc}</p>
           <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-3xl">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] font-black uppercase text-slate-400">Weight</span>
                <span className="text-2xl font-black dark:text-white">{selectedCat.percent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${selectedCat.color}`} style={{ width: `${selectedCat.percent}%` }} />
              </div>
           </div>
        </ModalWrapper>
      )}

      {activeModal === 'ledger' && (
        <ModalWrapper onClose={() => setActiveModal(null)} title="System Ledger">
          <div className="space-y-3">
            {['PDF Document', 'CSV Spreadsheet', 'JSON API'].map(f => (
              <button key={f} type="button" className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase text-left dark:text-white hover:border-white/20 border border-transparent transition-all">{f}</button>
            ))}
          </div>
        </ModalWrapper>
      )}

      {activeModal === 'policy' && (
        <ModalWrapper onClose={() => setActiveModal(null)} title="Usage Policy">
          <p className="text-slate-500 text-sm leading-relaxed">Transactions exceeding $10k require manual override and 2FA authentication. Regional spending limits apply based on department allocation.</p>
        </ModalWrapper>
      )}
    </div>
  );
}

// --- SHARED MODAL WRAPPER ---
function ModalWrapper({ children, onClose, title }: any) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white dark:bg-[#132335] rounded-[2.5rem] p-10 border border-white/10 shadow-2xl animate-in zoom-in-95">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{title}</h3>
        {children}
        <button type="button" onClick={onClose} className="w-full mt-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-2xl active:scale-95">Acknowledge</button>
      </div>
    </div>
  );
}