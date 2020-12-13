import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Store } from 'redux';
import { ROUTES } from '../shared/constants';
import { AppState } from '../types/app';
import { Tabs } from '../ui-components/tabs/tabs';
import { Bills } from './bills/bills';

import { Header } from './header/header';

import styles from './root.module.scss';

const BILLS_TABS = [
  { route: ROUTES.BILLS, text: 'Bills' },
  { route: ROUTES.TRANSACTIONS, text: 'Transactions' },
];

interface Props {
  store: Store<AppState>;
}

export const Root: React.FC<Props> = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <div className={styles.container}>
        <BrowserRouter>
          <Tabs tabs={BILLS_TABS} />
          <Route path={ROUTES.TYPE} component={Bills} />
          <Redirect to={ROUTES.BILLS} />
        </BrowserRouter>
      </div>
    </div>
  </Provider>
);
