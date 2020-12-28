import React from 'react';
import welcomeIcon from './assets/welcome.jpg';
import Tabs from './components/tabs';

const alignCenter = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '24px',
  paddingBottom: '16px'
};

const App = () => {
  return (
    <>
      <img style={alignCenter} src={welcomeIcon} alt="Welcome!" />
      <Tabs />
    </>
  );
};

export default App;
