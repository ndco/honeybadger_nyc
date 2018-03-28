import React, { Component } from 'react';
import './App.css';
import Pokemon from './components/pokemon';

const App = ({}) => {
    return (
      <div>
        <h1 id='logo'>My Pokemon</h1>
        <Pokemon />
      </div>
    )
}

export default App;
