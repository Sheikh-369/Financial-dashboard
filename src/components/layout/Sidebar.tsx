"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NewEntryModal from "../modals/NewEntryModal";

const navItems = [
  { name: "Dashboard", href: "/", icon: "dashboard" },
  { name: "Sales", href: "/sales", icon: "payments" },
  { name: "Expenses", href: "/expenses", icon: "receipt_long" },
  { name: "Reports", href: "/reports", icon: "analytics" },
  { name: "Settings", href: "/settings", icon: "settings" },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    {/* 1. THE DIMMER: This makes the rest of the screen dark when the menu is open on mobile */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden" 
        onClick={onClose} 
      />
    )}
      <aside className={`
      /* 2. BASE STYLES: Same as before */
      flex flex-col h-screen w-72 fixed left-0 top-0 z-50 
      bg-[#F1F5F9] dark:bg-[#0B1C30] p-6 border-r border-slate-200 
      dark:border-white/5 transition-all duration-300 ease-in-out

      /* 3. MOBILE SLIDE LOGIC: 
         If isOpen is false, we push it off-screen (-translate-x-full).
         If isOpen is true, we bring it to the front (translate-x-0).
      */
      ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}

      /* 4. DESKTOP LOGIC:
         On large screens (lg), we reset it to its normal position 
         no matter what the mobile state is.
      */
      lg:translate-x-0
    `}>
      <div className="mb-10">
        <h2 className="font-headline font-black text-2xl tracking-tighter text-[#0F172A] dark:text-white">
          The Ledger
        </h2>
        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive
                  ? "text-[#0F172A] dark:text-white font-bold bg-white dark:bg-white/10 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                  : "text-slate-500 dark:text-slate-400 font-medium hover:bg-white/50 dark:hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span className="text-sm font-body">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 space-y-4">
        {/* New Entry Button - Flipped colors for Dark Mode contrast */}
        <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0B1C30] py-3.5 rounded-xl font-black text-sm tracking-tight flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
          <span className="material-symbols-outlined text-lg">add</span>
          New Entry
        </button>
        
        <Link 
          href="/help" 
          className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white font-bold text-sm transition-colors group"
        >
          <div className="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center group-hover:border-[#0F172A] dark:group-hover:border-white transition-all">
            <span className="material-symbols-outlined text-[14px]">help</span>
          </div>
          Help Center
        </Link>
        {/* New Entry Modal */}
      <NewEntryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      </div>
    </aside>
    </>
    
  );
}