"use client";

export default function IdentityProfile() {
  return (
    <section className="bg-white dark:bg-[#132335] p-6 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm transition-all duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-10 gap-4">
        <h3 className="text-xl font-black flex items-center gap-4 text-slate-900 dark:text-white transition-colors tracking-tighter">
          <span className="material-symbols-outlined text-black dark:text-white">person</span>
          Identity Profile
        </h3>
        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">
          Edit Public Profile
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Profile Image Container - Centered on Mobile */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="relative group w-32 h-32 md:w-36 md:h-36">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd3L_Jo8wZ3xB0thBDiPjx9n1ktP1WYklhvaX5UGIouK8uR6NGmT-Eot8sfpYpG7XKcC_cmk-DWayo7vq9_rv3ve6waNZZl_3Yz2n31NQofAE_LEL6nIjRMEe441MMyxwQ7fgWvSBv-OI2vHMsQXZt7DwvQi_dQiaVO2AohujnXYAhqA2_HCP6iNlHfvwKhY18ewUJ5PiYS6dJimi4QXy5HX4UtrYNhOdQMPkWR3cdokHub7nbs8Nd5QH5Ym2ysmFullQU6HYTGrAw" 
              className="w-full h-full rounded-[2rem] object-cover ring-4 ring-slate-50 dark:ring-[#0B1C30] shadow-xl grayscale transition-all duration-500 group-hover:grayscale-0"
              alt="Profile" 
            />
            {/* Camera Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-[2rem] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-sm">
              <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-1">
              Full Legal Name
            </label>
            <input 
              className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-[13px] font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all outline-none" 
              type="text" 
              defaultValue="Zunaid Sheikh" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-1">
              Email Address
            </label>
            <input 
              className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-[13px] font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all outline-none" 
              type="email" 
              defaultValue="zunaid.sheikh@editorialledger.com" 
            />
          </div>
          <div className="space-y-3 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-1">
              Professional Bio
            </label>
            <textarea 
              className="w-full bg-slate-50 dark:bg-[#0B1C30] border-none rounded-2xl px-5 py-4 text-[13px] font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all outline-none leading-relaxed resize-none" 
              rows={3}
              defaultValue="Full-stack web developer and UI/UX designer specialized in cinematic digital design and authoritative ledger systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
}