import { Bill } from '../types/bill-types';
import { apiClient } from './api-client';

export const billsApi = {
  getBills: async (): Promise<Bill[]> =>
    apiClient.get('/bills').then((response) => response.data),

  updateBill: async (bill: Bill) =>
    apiClient
      .patch(`/bills/${bill.id}`, bill)
      .then((response) => response.data),
};
