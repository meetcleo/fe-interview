import React from 'react';

import welcomeIcon from '../../assets/welcome.jpg';

import styles from './header.module.scss';

export const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.headerLogo}>
      <img src={welcomeIcon} alt="Welcome!" />
    </div>
  </div>
);
