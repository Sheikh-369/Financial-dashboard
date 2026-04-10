const Topbar = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 bg-surface/80 backdrop-blur-xl z-40">
      <div className="flex items-center gap-4">
        {/* Hembueger menu - Updated to xl:hidden to support iPad Pro */}
        <button 
          onClick={onOpen} // This runs the instruction from the Layout
          className="xl:hidden bg-amber-950 p-2 -ml-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="font-headline font-semibold tracking-tight text-xl text-on-surface">
          Dashboard Overview
        </h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            search
          </span>
          <input 
            type="text"
            className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm w-64 focus:ring-1 focus:ring-primary-container outline-none" 
            placeholder="Search entries..." 
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-outline-variant/20">
            <img 
              alt="User Profile" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;