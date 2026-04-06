import DangerZone from "@/src/components/settings/DangerZone";
import DispatchCenter from "@/src/components/settings/DispatchCenter";
import IdentityProfile from "@/src/components/settings/IdentityProfile";
import InterfaceAesthetics from "@/src/components/settings/InterfaceAesthetics";
import SecurityInfrastructure from "@/src/components/settings/SecurityInfrastructure";


export default function SettingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 pt-12 pb-32">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 font-headline">
          Account Settings
        </h2>
        <p className="text-slate-500 mt-2 font-body max-w-2xl">
          Manage your editorial profile, security credentials, and preferred ledger 
          notifications from this central authority console.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Core Identity & Security */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <IdentityProfile />
          <SecurityInfrastructure />
        </div>

        {/* Right Column: Preferences & Actions */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <InterfaceAesthetics />
          <DispatchCenter />
          <DangerZone />
        </div>
      </div>

      {/* Floating Save Action */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined">save</span>
          <span className="font-bold">Commit Changes</span>
        </button>
      </div>
    </div>
  );
}