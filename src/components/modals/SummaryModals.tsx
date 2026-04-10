"use client";

interface ModalProps {
  onClose: () => void;
}

function ModalWrapper({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-white dark:bg-[#132335] rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-white/10 shadow-2xl animate-in zoom-in-95 duration-300">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">{title}</h3>
        {children}
        <button 
          onClick={onClose}
          className="w-full mt-10 py-4 bg-black dark:bg-white text-white dark:text-[#0B1C30] text-[10px] font-black uppercase tracking-widest rounded-xl active:scale-95 transition-all shadow-lg"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
}

export function LedgerModal({ onClose }: ModalProps) {
  return (
    <ModalWrapper title="Generate Ledger" onClose={onClose}>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">Select your preferred format to export the current monthly disbursement records.</p>
      <div className="space-y-3">
        {['Standard PDF Audit', 'Financial CSV', 'Developer JSON'].map((format) => (
          <button key={format} className="w-full p-4 text-left rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/20 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-white transition-all">
            {format}
          </button>
        ))}
      </div>
    </ModalWrapper>
  );
}

export function PolicyModal({ onClose }: ModalProps) {
  return (
    <ModalWrapper title="Spending Policy" onClose={onClose}>
      <div className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
        <p>• All expenditures over $10,000.00 require a digital signature from the department head.</p>
        <p>• Emergency overrides are logged and audited within 24 hours of execution.</p>
        <p>• Allocation balances do not roll over to the following fiscal month.</p>
      </div>
    </ModalWrapper>
  );
}