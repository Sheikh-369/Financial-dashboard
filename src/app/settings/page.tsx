// src/app/settings/page.tsx
import DangerZone from "@/src/components/settings/DangerZone";
import DispatchCenter from "@/src/components/settings/DispatchCenter";
import IdentityProfile from "@/src/components/settings/IdentityProfile";
import InterfaceAesthetics from "@/src/components/settings/InterfaceAesthetics";
import SecurityInfrastructure from "@/src/components/settings/SecurityInfrastructure";

export default function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-10 pt-16 pb-40 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* 1. Header Section */}
      <div className="mb-16">
        <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors">
          Account Settings
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-4 font-bold uppercase tracking-tight max-w-2xl text-sm leading-relaxed transition-colors">
          Manage your editorial profile, security credentials, and preferred ledger 
          notifications from this central authority console.
        </p>
      </div>

      {/* 2. Bento Grid System */}
      <div className="grid grid-cols-12 gap-10">
        
        {/* Left Column: Core Identity & Security (The Narrative) */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <IdentityProfile />
          <SecurityInfrastructure />
        </div>

        {/* Right Column: Preferences & Actions (The Logic) */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <InterfaceAesthetics />
          <DispatchCenter />
          <DangerZone />
        </div>
      </div>

      {/* 3. Floating Save Action (The Financial Commitment) */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className="flex items-center gap-4 px-10 py-5 bg-black dark:bg-white text-white dark:text-[#0B1C30] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:scale-105 active:scale-95 transition-all duration-300">
          <span className="material-symbols-outlined font-black">save</span>
          <span className="font-black text-[10px] uppercase tracking-[0.3em]">Commit Changes</span>
        </button>
      </div>
    </div>
  );
}