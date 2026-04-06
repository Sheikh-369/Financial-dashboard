import AnnualArchiveCard from "@/src/components/reports/AnnualArchiveCard";
import ProfitLossCard from "@/src/components/reports/ProfitLossCard";
import RecentExports from "@/src/components/reports/RecentExports";
import ReportGenerator from "@/src/components/reports/ReportGenerator";
import TaxSummaryCard from "@/src/components/reports/TaxSummaryCard";


export default function ReportsPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      {/* Header & Config Section */}
      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            The Editorial Ledger: <br />
            <span className="text-slate-400">Performance Archive</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl font-medium leading-relaxed">
            Curate your financial narrative. Select from professional reporting templates to generate authoritative deep-dives.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <ReportGenerator />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
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

      {/* Bottom Editorial Quote Section */}
        <div className="mt-20 flex items-center gap-12 bg-[#F8FAFF] rounded-[2.5rem] p-2 pr-12 border border-slate-100/50">
        {/* Left Image Section */}
        <div className="w-1/3 h-[280px] relative overflow-hidden rounded-[2rem]">
            <img 
            className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFOj0qQtRlwHPPLtSfjmgKUObQvYjDF5RQt_TGyPYDs8BsMM6RjCNXdKBFM3Q_cnrJminTFoXrA1FplDgtxfPsHEOAxGjEsryz5MKzKOU4e-N0aPCnBIu-mhb4RA5A5NB-x9j9A_sxIpxXsQjnzvJPn9CKM-cBAPlcdumxXNhTvHOmWLqBKUuSqrIC9nAThTSnKn68gZ_Xzq7wZNcYmUGCa0rNnSz5K9jA_M5u-KIT1piuXItNPLq-q6NNI1ao9t6Gna25sw4mxiOq"
            alt="Financial ledger abstract"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFF]/20 via-transparent to-[#F8FAFF]"></div>
        </div>

        {/* Right Content Section */}
        <div className="w-2/3 py-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">
            Financial Insight
            </h5>
            <h2 className="text-[2.75rem] font-black tracking-tighter text-[#0F172A] mb-6 leading-tight">
            "Authority is built through transparency."
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl font-medium">
            The Ledger's reporting engine utilizes real-time API integrations to ensure every 
            digit reflects your true standing. Use these reports not just for compliance, 
            but as a strategic compass for the next fiscal year.
            </p>
        </div>
        </div>
    </div>
  );
}