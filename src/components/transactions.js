import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';

import { APIConstants } from '.././shared/constants';
import Icon from '.././shared/components/icon';
import Accordian from '.././shared/components/accordian';
import CompanyName from '.././shared/components/companyName';

const Transactions = () => {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(APIConstants.bills)
        .then((res) => {
          return res.json();
        })
        .then((data) => setTransactions(data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <>
      {transactions &&
        transactions.map((transaction) => {
          return (
            <div key={transaction.id}>
              {transaction.isBill === false && (
                <>
                  <Row>
                    <Col xs="6" lg="4">
                      <Icon
                        iconURL={transaction.iconURL}
                        altText={`${transaction.name} business icon`}
                      />
                    </Col>
                    <Col xs="4" lg="6">
                      <CompanyName companyName={transaction.name} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Accordian
                        buttonColor="link"
                        ctaText="Transactions"
                        items={transaction.transactions}
                      />
                    </Col>
                  </Row>
                </>
              )}
            </div>
          );
        })}
    </>
  );
};

export default Transactions;
