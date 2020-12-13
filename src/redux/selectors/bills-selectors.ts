import { Bill } from '../../types/bill-types';

export const filterBills = (items: Bill[]) =>
  items.filter((item) => item.isBill);

export const filterTransactions = (items: Bill[]) =>
  items.filter((item) => !item.isBill);
