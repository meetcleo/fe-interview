import { Bill } from '../types/bill-types';

export const updateBillStore = (bills: Bill[], updatedBill: Bill): Bill[] => {
  const updatedBills = bills.map((bill) =>
    bill.id === updatedBill.id ? updatedBill : bill
  );

  return updatedBills;
};
