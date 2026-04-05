// src/types/index.ts
export type Status = 'Completed' | 'Pending' | 'Declined';

export interface Transaction {
  id: string;
  entity: string;
  subtext: string;
  status: Status;
  method: string;
  date: string;
  amount: string;
  initials: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon: string;
}