// @flow

import React, { Component } from 'react';
import Navigation from './components/Navigation'
import 'tachyons/css/tachyons.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
