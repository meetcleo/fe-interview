export interface Transaction {
  amount: number;
  date: string;
  id: number;
}

export interface Bill {
  categoryId: number;
  iconUrl: string | null;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Transaction[];
}
