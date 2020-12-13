import { ROUTE_PARAMS } from '../../shared/constants';
import { Bill } from '../../types/bill-types';

export const filterBills = (items: Bill[]) =>
  items.filter((item) => item.isBill);

export const filterTransactions = (items: Bill[]) =>
  items.filter((item) => !item.isBill);

export const filterBillsByType = (bills: Bill[], type: string) => {
  if (type === ROUTE_PARAMS.BILLS) {
    return filterBills(bills);
  }
  return filterTransactions(bills);
};
