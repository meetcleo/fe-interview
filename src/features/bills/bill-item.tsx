/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { Bill } from '../../types/bill-types';

import defaultImage from '../../assets/cleo_coin.jpg';
import styles from './bill-item.module.scss';

interface Props {
  item: Bill;
  handleUpdateBill: (bill: Bill) => void;
}

export const BillItem: React.FC<Props> = ({ item, handleUpdateBill }) => {
  const { name, isBill, transactions } = item;

  const [open, setOpen] = useState(false);

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    handleUpdateBill({ ...item, isBill: !item.isBill });
  };

  return (
    <div className={styles.bill} onClick={() => setOpen(!open)}>
      <div className={styles.billSummaryContainer}>
        <div className={styles.billInfo}>
          <div className={styles.billImageContainer}>
            {/* <img src={iconUrl || defaultImage} alt={name} /> */}
            <img src={defaultImage} alt={name} />
          </div>
          <div className={styles.billTitle}>{name}</div>
        </div>
        <div className={styles.transactionAmount}>
          <div className={styles.amount}>{transactions.length}</div>
        </div>
      </div>
      <div className={styles.updateBill} onClick={onClick}>
        {isBill ? 'Remove bill' : 'Add as bill'}
      </div>
      {open && (
        <div className={styles.transactions}>
          {transactions.map((transaction) => {
            const { amount, date, id } = transaction;

            return (
              <div key={id} className={styles.transactionContainer}>
                <div>£{amount}</div>
                <div>{date}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
