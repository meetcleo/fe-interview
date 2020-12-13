import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

import styles from './tabs.module.scss';

export interface TabInfo {
  route: string;
  text: string;
}

interface Props extends RouteComponentProps {
  tabs: TabInfo[];
}

export const TabsComponent: React.FC<Props> = ({ tabs }) => (
  <div className={styles.tabsWrapper}>
    {tabs.map((tab) => {
      const { route, text } = tab;

      return (
        <NavLink
          key={text}
          className={styles.tab}
          activeClassName={styles.tabActive}
          to={route}
        >
          {text}
        </NavLink>
      );
    })}
  </div>
);

export const Tabs = withRouter(TabsComponent);
