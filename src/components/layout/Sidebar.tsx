"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/", icon: "dashboard" },
  { name: "Sales", href: "/sales", icon: "payments" },
  { name: "Expenses", href: "/expenses", icon: "receipt_long" },
  { name: "Reports", href: "/reports", icon: "analytics" },
  { name: "Settings", href: "/settings", icon: "settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-50 bg-slate-100 dark:bg-slate-900 p-6">
      <div className="mb-10">
        <h2 className="font-headline font-black text-2xl tracking-tighter text-on-surface">
          The Ledger
        </h2>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
          Financial Authority
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all scale-95 active:scale-100 ${
                isActive
                  ? "text-on-surface font-bold bg-white dark:bg-slate-800 shadow-sm ring-1 ring-black/5"
                  : "text-on-surface-variant font-medium hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-body">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 space-y-4">
        <button className="w-full bg-[#0F172A] text-white py-3.5 rounded-xl font-bold text-sm tracking-tight flex items-center justify-center gap-2 hover:bg-black transition-all shadow-md active:scale-[0.98]">
    <span className="material-symbols-outlined text-lg">add</span>
    New Entry
  </button>
        <Link 
          href="/help" 
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors"
        >
          <span className="material-symbols-outlined">help</span>
          Help Center
        </Link>
      </div>
    </aside>
  );
}