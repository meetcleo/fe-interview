// @flow

import React, { useState } from 'react';
import { Collapse, Button, Row, Col } from 'reactstrap';

import { formatter } from '../constants.js';

type Props = {
  ctaText: string,
  buttonColor: string,
  items?: Array
};

const Accordian = ({ ctaText, buttonColor, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        color={buttonColor}
        onClick={toggle}
        style={{ marginBottom: '16px', fontWeight: '500' }}
      >
        {ctaText}
      </Button>
      <Collapse isOpen={isOpen}>
        {items
          ? items.map((item) => {
              return (
                <Row key={item.id} style={{ marginBottom: '12px' }}>
                  <Col>{formatter.format(item.amount)}</Col>
                  <Col>{item.date}</Col>
                </Row>
              );
            })
          : ''}
      </Collapse>
    </div>
  );
};

export default Accordian;
