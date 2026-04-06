// import BudgetSummary from "@/src/components/expenses/BudgetSummary";
// import CategoryAllocation from "@/src/components/expenses/CategoryAllocation";
// import ExpenseTable from "@/src/components/expenses/ExpenseTable";


// export default function ExpensesPage() {
//   return (
//     <div className="p-8 max-w-7xl mx-auto space-y-10">
//       <div className="mb-10">
//         <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">Expense Intelligence</h2>
//         <p className="text-slate-500 max-w-2xl font-medium">
//           A granular overview of corporate disbursements. Analyze categorized spending patterns and maintain fiscal discipline.
//         </p>
//       </div>

//       {/* Bento Grid */}
//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-12 lg:col-span-8">
//           <BudgetSummary />
//         </div>
//         <div className="col-span-12 lg:col-span-4">
//           <CategoryAllocation />
//         </div>
//         <div className="col-span-12 mt-4">
//           <ExpenseTable />
//         </div>
//       </div>

//       <footer className="mt-16 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
//         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
//           © 2026 The Editorial Ledger Financial Group
//         </p>
//         <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
//           <a href="#" className="hover:text-black">Data Policy</a>
//           <a href="#" className="hover:text-black">Auditor Access</a>
//           <a href="#" className="hover:text-black">Compliance</a>
//         </div>
//       </footer>
//     </div>
//   );
// }

//2nd
// src/app/expenses/page.tsx
import BudgetSummary from "@/src/components/expenses/BudgetSummary";
import CategoryAllocation from "@/src/components/expenses/CategoryAllocation";
import ExpenseTable from "@/src/components/expenses/ExpenseTable";

export default function ExpensesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
      {/* 1. Page Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors mb-2">
          Expense Intelligence
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl font-bold uppercase tracking-tight text-xs">
          A granular overview of corporate disbursements. Analyze categorized spending patterns and maintain fiscal discipline.
        </p>
      </div>

      {/* 2. Bento Grid */}
      <div className="grid grid-cols-12 gap-8">
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
      <footer className="mt-20 py-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 transition-colors">
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">
          © 2026 The Editorial Ledger Financial Group
        </p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Data Policy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Auditor Access</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Compliance</a>
        </div>
      </footer>
    </div>
  );
}