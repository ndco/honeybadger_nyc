import React, { Component } from 'react';
import './App.css';
import Tweeter from './components/tweeter';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Tweet</h1>
        <Tweeter />
      </div>
    );
  }
}

export default App;
