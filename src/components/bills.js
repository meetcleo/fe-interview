// @flow

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';

import { APIConstants } from '.././shared/constants';
import Accordian from '.././shared/components/accordian';
import Icon from '.././shared/components/icon';
import CompanyName from '.././shared/components/companyName';
import NumberOfTransactions from '.././shared/components/numberOfTransactions';

const Bills = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(APIConstants.bills)
        .then((res) => {
          return res.json();
        })
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <>
      {data
        ? data.map((bill) => {
            return (
              <div key={bill.id}>
                {bill.isBill === true && (
                  <>
                    <Row>
                      <Col xs="3" lg="1">
                        <Icon imgUrl={bill.iconURL} altText="business icon" />
                      </Col>
                      <Col xs="3">
                        <CompanyName companyName={bill.name} />
                      </Col>
                      <Col>
                        <NumberOfTransactions
                          providedNumber={bill.transactions.length}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Accordian
                          buttonColor="link"
                          ctaText="Transactions"
                          items={bill.transactions}
                        />
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            );
          })
        : ''}
    </>
  );
};

export default Bills;
