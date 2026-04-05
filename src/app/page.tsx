// src/app/page.tsx
import { StatCard } from "../components/dashboard/StatCard";
import TransactionTable from "../components/dashboard/TransactionTable";
// Import the new specialized components
import SalesPerformance from "../components/dashboard/SalesPerformance";
import ExpenseAllocation from "../components/dashboard/ExpenseAllocation";

export default function DashboardPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      
      {/* 1. Summary Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard title="Today's Sales" value="$2,482.00" trend="+12% vs yesterday" icon="trending_up" variant="secondary" />
        <StatCard title="Total Sales" value="$482,910" trend="FY24 Year-to-date" icon="account_balance_wallet" />
        <StatCard title="Monthly Sales" value="$38,204" trend="+4.2% from June" icon="calendar_today" variant="secondary" />
        <StatCard title="Expenses" value="$12,400" trend="-8% projected" icon="payments" variant="error" />
        <StatCard title="Profit" value="$25,804" trend="67.5% Margin" icon="show_chart" variant="secondary" />
      </section>

      {/* 2. Analytics Section (Now using the new components) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Replacing the old Sales Performance div with the component */}
        <SalesPerformance />

        {/* Replacing the old Expense Allocation div with the component */}
        <ExpenseAllocation />
      </div>

      {/* 3. Data Table */}
      <TransactionTable />
      
    </div>
  );
}