import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Bill } from '../../types/bill-types';
import { BillItem } from './bill-item';
import { AppState } from '../../types/app';
import { fetchBills, updateBill } from '../../redux/actions/bills-actions';
import { filterBillsByType } from '../../redux/selectors/bills-selectors';

export const Bills: React.FC = () => {
  const dispatch = useDispatch();
  const { type } = useParams<{ type: string }>();
  const items: Bill[] = useSelector((state: AppState) =>
    filterBillsByType(state.bills.items, type)
  );

  const handleUpdateBill = (bill: Bill) => {
    dispatch(updateBill(bill));
  };

  useEffect(() => {
    dispatch(fetchBills());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <BillItem
            handleUpdateBill={handleUpdateBill}
            key={item.id}
            item={item}
          />
        ))}
    </>
  );
};
