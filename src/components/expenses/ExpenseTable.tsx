const disbursements = [
  { vendor: 'Amazon Web Services', purpose: 'Infrastructure Hosting', cat: 'Technology', date: 'Oct 24, 2026', amount: '$12,450.00', status: 'Cleared', icon: 'cloud' },
  { vendor: 'Meta Platforms Inc.', purpose: 'Q4 Ad Campaigns', cat: 'Marketing', date: 'Oct 22, 2026', amount: '$4,200.00', status: 'Cleared', icon: 'campaign' },
  { vendor: 'WeWork Offices', purpose: 'Dublin Hub Rental', cat: 'Operations', date: 'Oct 20, 2026', amount: '$8,100.00', status: 'Pending', icon: 'work' },
  { vendor: 'The Ritz-Carlton', purpose: 'Executive Dinner', cat: 'Events', date: 'Oct 18, 2026', amount: '$2,850.15', status: 'Flagged', icon: 'restaurant' },
];

export default function ExpenseTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-8 flex items-center justify-between border-b border-slate-50">
        <h4 className="text-xl font-black tracking-tight text-slate-900">Recent Disbursements</h4>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white rounded-lg">All</button>
          <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-black">Pending</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Vendor / Purpose</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Category</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Amount</th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {disbursements.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-black transition-colors">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">{item.vendor}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{item.purpose}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-xs font-bold text-slate-600">{item.cat}</td>
                <td className="px-8 py-5 text-xs font-medium text-slate-400">{item.date}</td>
                <td className="px-8 py-5 text-sm font-black text-right text-slate-900">{item.amount}</td>
                <td className="px-8 py-5 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                    item.status === 'Cleared' ? 'bg-emerald-50 text-emerald-600' : 
                    item.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}