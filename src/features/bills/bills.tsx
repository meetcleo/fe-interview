import React from 'react';

import { Bill } from '../../types/bill-types';
import { MOCK_BILLS } from './mock-bills';
import { BillItem } from './bill-item';

export const Bills = () => {
  const items: Bill[] = MOCK_BILLS;

  const updateBill = (bill: Bill) => {
    // eslint-disable-next-line no-console
    console.log(bill);
  };

  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <BillItem updateBill={updateBill} key={item.id} item={item} />
        ))}
    </>
  );
};
