// src/components/dashboard/TransactionTable.tsx
import { Transaction } from '@/src/types';

const mockTransactions: Transaction[] = [
  { id: '1', entity: 'Acme Corp.', subtext: 'Software License', status: 'Completed', method: 'Bank Transfer', date: 'Oct 24, 2023', amount: '$1,200.00', initials: 'AM' },
  { id: '2', entity: 'Stripe Vendor', subtext: 'Card Processing', status: 'Pending', method: 'Credit Card', date: 'Oct 23, 2023', amount: '$450.12', initials: 'SV' },
  { id: '3', entity: 'Digital Ocean', subtext: 'Cloud Infrastructure', status: 'Declined', method: 'Direct Debit', date: 'Oct 21, 2023', amount: '$84.00', initials: 'DL' },
];

const TransactionTable = () => {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="px-8 py-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold font-headline">Recent Transactions</h3>
          <p className="text-sm text-on-surface-variant">Monitoring real-time financial flow</p>
        </div>
        <button className="text-sm font-bold text-primary hover:underline underline-offset-4">
          View All Statement
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-none">
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Entity</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Status</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Date</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {mockTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-surface-container flex items-center justify-center font-bold text-[10px]">
                      {tx.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{tx.entity}</div>
                      <div className="text-xs text-on-surface-variant">{tx.subtext}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full 
                    ${tx.status === 'Completed' ? 'bg-secondary-container/20 text-on-secondary-container' : 
                      tx.status === 'Declined' ? 'bg-error-container/20 text-on-error-container' : 
                      'bg-surface-container text-on-surface-variant'}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">{tx.date}</td>
                <td className={`px-8 py-5 text-sm font-bold text-right ${tx.status === 'Declined' ? 'text-error' : 'text-on-surface'}`}>
                  {tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionTable;