import React, { useState } from 'react';

import { wrapperStyles } from '../shared/constants';
import Transactions from './transactions';
import Bills from './bills';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
            style={{ fontWeight: 'bold' }}
          >
            Another Day, Another Bill{' '}
            <span role="img" aria-label="money flying away">
              💸
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
            style={{ fontWeight: 'bold' }}
          >
            Overdraft is Lurkin'{' '}
            <span role="img" aria-label="eyes">
              👀
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent style={wrapperStyles} activeTab={activeTab}>
        <TabPane tabId="1">
          <Row style={wrapperStyles}>
            <Col xs="1" lg="1"></Col>
            <Col xs="5" lg="4" style={{ fontWeight: 'bold' }}>
              Company Taking all of your{' '}
              <span
                role="img"
                aria-label="yellow face with dollar signs as eyes and a dollar bill tongue"
              >
                🤑
              </span>
            </Col>
            <Col
              xs="5"
              lg="6"
              style={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              Number of Times They've taken your{' '}
              <span role="img" aria-label="money bag">
                💰
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Bills />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row style={wrapperStyles}>
            <Col lg="6" style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Company coming after your money{' '}
              <span role="img" aria-label="worried face">
                😟
              </span>
            </Col>
          </Row>
          <Transactions />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
