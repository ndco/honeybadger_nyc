// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear }) => (
  <div>
    <h1> Value(s): {value} </h1>
    Count to Add: <input type="text" name="name" />
    <input type="submit" value="Submit" />
    <br/>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> clear </button>
  </div>
);

export default Counter;
