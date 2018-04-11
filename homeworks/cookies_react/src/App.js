import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      totalCookies: this.getCurrentCookie
    }

    this.updateCookies = this.updateCookies.bind(this);
  }

  updateCookies() {
    console.log(this.refs)
    let getCurrentCookie = Cookies.get('cookie');
    if (this.refs === 'add') {
      Cookies.set('cookie', parseInt(getCurrentCookie) + 1);
    } else {
      Cookies.set('cookie', parseInt(getCurrentCookie) - 1);
    }
    this.setState({
      totalCookies: getCurrentCookie
    });

  }
  
  render() {
   return (
     <div>
       <h1>Welcome to React</h1>
       <h2>Cookies {this.state.totalCookies}</h2>
       <button type="button" onClick={this.updateCookies} ref="add" value="add">Add(+)</button>
       <button type="button" onClick={this.updateCookies} ref="remove">Remove(-)</button>
     </div>
   );
 }

}

export default App;
