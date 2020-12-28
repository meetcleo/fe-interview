// @flow

import React from 'react';

type Props = {
  providedNumber: number
};

const NumberOfTransactions = ({ providedNumber }: Props) => {
  return (
    <>
      <section style={{ textAlign: 'center' }}>{providedNumber}</section>
    </>
  );
};

export default NumberOfTransactions;
