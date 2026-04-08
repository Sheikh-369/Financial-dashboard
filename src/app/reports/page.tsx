// src/app/reports/page.tsx
import AnnualArchiveCard from "@/src/components/reports/AnnualArchiveCard";
import ProfitLossCard from "@/src/components/reports/ProfitLossCard";
import RecentExports from "@/src/components/reports/RecentExports";
import ReportGenerator from "@/src/components/reports/ReportGenerator";
import TaxSummaryCard from "@/src/components/reports/TaxSummaryCard";

export default function ReportsPage() {
  return (
    <div className="p-5 md:p-10 max-w-7xl mx-auto space-y-10 md:space-y-12 animate-in fade-in duration-700">
      
      {/* 1. Header & Config Section */}
      <div className="items-start lg:items-end">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.9] transition-colors">
            The Editorial Ledger: <br className="hidden md:inline"/>
            <span className="text-slate-400 dark:text-slate-600">Performance Archive</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-xl font-bold uppercase tracking-tight leading-relaxed transition-colors">
            Curate your financial narrative. Select from professional reporting templates to generate authoritative deep-dives.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <ReportGenerator />
        </div>
      </div>

      {/* 2. Bento Grid */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 lg:col-span-8">
          <ProfitLossCard />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <TaxSummaryCard />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AnnualArchiveCard />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <RecentExports />
        </div>
      </div>

      {/* 3. Bottom Editorial Quote Section */}
      <div className="mt-20 flex items-center gap-12 bg-[#F8FAFF] dark:bg-[#132335] rounded-[3rem] p-6 md:p-3 md:pr-16 border border-slate-100 dark:border-white/5 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none">
        
        {/* Left Image Section */}
        <div className="hidden md:block w-1/3 h-[320px] relative overflow-hidden rounded-[2.5rem] bg-slate-200 dark:bg-[#0B1C30]">
          <img 
            className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay transition-opacity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFOj0qQtRlwHPPLtSfjmgKUObQvYjDF5RQt_TGyPYDs8BsMM6RjCNXdKBFM3Q_cnrJminTFoXrA1FplDgtxfPsHEOAxGjEsryz5MKzKOU4e-N0aPCnBIu-mhb4RA5A5NB-x9j9A_sxIpxXsQjnzvJPn9CKM-cBAPlcdumxXNhTvHOmWLqBKUuSqrIC9nAThTSnKn68gZ_Xzq7wZNcYmUGCa0rNnSz5K9jA_M5u-KIT1piuXItNPLq-q6NNI1ao9t6Gna25sw4mxiOq"
            alt="Financial ledger abstract"
          />
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F8FAFF] dark:to-[#132335]"></div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-2/3 py-10 text-center md:text-left">
          <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-6 transition-colors">
            Financial Insight
          </h5>
          <h2 className="text-2xl md:text-[2.75rem] font-black tracking-tighter text-[#0F172A] dark:text-white mb-8 leading-[1.1] transition-colors">
            "Authority is built through transparency."
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed max-w-xl font-bold uppercase tracking-tight">
            The Ledger's reporting engine utilizes real-time API integrations to ensure every 
            digit reflects your true standing. Use these reports not just for compliance, 
            but as a strategic compass for the next fiscal year.
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="pt-20 pb-10 flex justify-center">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-slate-300 dark:text-slate-700">
          Validated by The Editorial Ledger Group • 2026
        </p>
      </div>
    </div>
  );
}