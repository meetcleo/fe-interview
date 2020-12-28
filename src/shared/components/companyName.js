// @flow

import React from 'react';

type Props = {
  companyName: string
};

const CompanyName = ({ companyName }: Props) => {
  return (
    <div>
      <section>{companyName}</section>
    </div>
  );
};

export default CompanyName;
