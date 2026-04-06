export default function IdentityProfile() {
  return (
    <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-start justify-between mb-8">
        <h3 className="text-xl font-black flex items-center gap-3">
          <span className="material-symbols-outlined text-black">person</span>
          Identity Profile
        </h3>
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-black transition-colors">
          Edit Public Profile
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-shrink-0">
          <div className="relative group w-32 h-32">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd3L_Jo8wZ3xB0thBDiPjx9n1ktP1WYklhvaX5UGIouK8uR6NGmT-Eot8sfpYpG7XKcC_cmk-DWayo7vq9_rv3ve6waNZZl_3Yz2n31NQofAE_LEL6nIjRMEe441MMyxwQ7fgWvSBv-OI2vHMsQXZt7DwvQi_dQiaVO2AohujnXYAhqA2_HCP6iNlHfvwKhY18ewUJ5PiYS6dJimi4QXy5HX4UtrYNhOdQMPkWR3cdokHub7nbs8Nd5QH5Ym2ysmFullQU6HYTGrAw" 
              className="w-full h-full rounded-2xl object-cover ring-4 ring-slate-50"
              alt="Profile" 
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
              <span className="material-symbols-outlined text-white">photo_camera</span>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Legal Name</label>
            <input 
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-black transition-all" 
              type="text" 
              defaultValue="Alexander Pierce" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <input 
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-black transition-all" 
              type="email" 
              defaultValue="a.pierce@editorialledger.com" 
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Professional Bio</label>
            <textarea 
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-black transition-all" 
              rows={3}
              defaultValue="Chief Accountant with 12 years of experience in high-volume editorial financing and ledger management."
            />
          </div>
        </div>
      </div>
    </section>
  );
}