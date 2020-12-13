import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { Tabs } from '../ui-components/tabs/tabs';
import { Bills } from './bills/bills';

import { Header } from './header/header';

import styles from './root.module.scss';

const BILLS_TABS = [
  { route: ROUTES.BILLS, text: 'Bills' },
  { route: ROUTES.TRANSACTIONS, text: 'Transactions' },
];

export const Root: React.FC = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <BrowserRouter>
        <Tabs tabs={BILLS_TABS} />
        <Route path={ROUTES.BILLS} component={Bills} />
        <Route path={ROUTES.TRANSACTIONS} component={Bills} />
        <Redirect to={ROUTES.BILLS} />
      </BrowserRouter>
    </div>
  </div>
);
