"use client";
import { useEffect, useState } from "react"; // 1. Add these
import { useTheme } from "next-themes";      // 2. Add this

export default function CategoryAllocation() {
  // 3. Create a 'mounted' state
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // 4. Set mounted to true once the component loads in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { name: 'Payroll & Benefits', percent: 35, color: 'bg-black dark:bg-white' },
    { name: 'Infrastructure', percent: 25, color: 'bg-emerald-600 dark:bg-emerald-500' },
    { name: 'Marketing', percent: 25, color: 'bg-slate-400 dark:bg-white/20' },
    { name: 'Operations', percent: 15, color: 'bg-slate-200 dark:bg-white/5' },
  ];

  const lightGradient = 'conic-gradient(#000 0% 35%, #059669 35% 60%, #94a3b8 60% 85%, #e2e8f0 85% 100%)';
  const darkGradient = 'conic-gradient(#fff 0% 35%, #10b981 35% 60%, rgba(255,255,255,0.2) 60% 85%, rgba(255,255,255,0.05) 85% 100%)';

  // 5. IMPORTANT: If not mounted yet, show a simple placeholder or empty ring
  // This prevents the "Mismatch" because the Server and Client will both see this first.
  if (!mounted) {
    return <div className="h-full w-full bg-white dark:bg-[#132335] animate-pulse rounded-[2.5rem]" />;
  }

  return (
    <div className="bg-white dark:bg-[#132335] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm h-full flex flex-col transition-all duration-500">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-10 transition-colors">
        Category Allocation
      </h4>
      
      <div className="relative w-48 h-48 mx-auto mb-12 group">
        <div 
          className="w-full h-full rounded-full transition-all duration-700 ease-in-out" 
          // 6. Use the 'theme' variable from useTheme() now that it's safe!
          style={{ background: theme === 'dark' ? darkGradient : lightGradient }}
        />
        
        <div className="absolute inset-5 bg-white dark:bg-[#132335] rounded-full flex items-center justify-center border-4 border-slate-50/50 dark:border-white/5 shadow-inner transition-colors duration-500">
          <div className="text-center">
            <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">Top Spend</p>
            <p className="text-lg font-black text-slate-900 dark:text-white transition-colors">Payroll</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <span className={`w-3 h-3 rounded-full ${cat.color} transition-all duration-500 shadow-sm`}></span>
              <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-black dark:group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </div>
            <span className="text-sm font-black text-slate-900 dark:text-white transition-colors">
              {cat.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

//3rd
