import React, { Component } from 'react';
import welcomeIcon from './assets/welcome.jpg';

class App extends Component {
  render() {
    return (
      <img src={welcomeIcon} alt="Welcome!"/>
    );
  }
}

export default App;
