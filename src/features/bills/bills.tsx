import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Bill } from '../../types/bill-types';
import { BillItem } from './bill-item';
import { AppState } from '../../types/app';
import { fetchBills } from '../../redux/actions/bills-actions';
import {
  filterBills,
  filterTransactions,
} from '../../redux/selectors/bills-selectors';

type Props = RouteComponentProps<{ type: string }>;

export const Bills: React.FC<Props> = ({
  match: {
    params: { type },
  },
}) => {
  const dispatch = useDispatch();
  const bills: Bill[] = useSelector((state: AppState) => state.bills.items);

  let items: Bill[];

  if (type === 'bills') {
    items = filterBills(bills);
  } else {
    items = filterTransactions(bills);
  }

  const updateBill = (bill: Bill) => {
    // eslint-disable-next-line no-console
    console.log(bill);
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
          <BillItem updateBill={updateBill} key={item.id} item={item} />
        ))}
    </>
  );
};
