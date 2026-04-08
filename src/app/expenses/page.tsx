
import BudgetSummary from "@/src/components/expenses/BudgetSummary";
import CategoryAllocation from "@/src/components/expenses/CategoryAllocation";
import ExpenseTable from "@/src/components/expenses/ExpenseTable";

export default function ExpensesPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
      {/* 1. Page Header */}
      <div className="mb-10 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors mb-2">
          Expense Intelligence
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl font-bold uppercase tracking-tight text-xs">
          A granular overview of corporate disbursements. Analyze categorized spending patterns and maintain fiscal discipline.
        </p>
      </div>

      {/* 2. Bento Grid */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 lg:col-span-8">
          <BudgetSummary />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CategoryAllocation />
        </div>
        <div className="col-span-12 mt-4">
          <ExpenseTable />
        </div>
      </div>

      {/* 3. The Audit Footer */}
      <footer className="mt-20 py-12 border-t border-slate-100 dark:border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 transition-colors">
        <p className="text-[9px] md:text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">
          © 2026 The Editorial Ledger Financial Group
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Data Policy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Auditor Access</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Compliance</a>
        </div>
      </footer>
    </div>
  );
}