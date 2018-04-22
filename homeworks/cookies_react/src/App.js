import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // cookies: [
      //   chocolate,
      //   sugar,
      //   lemon
      // ],
      totalCookies: this.getCurrentCookie
    }

    this.updateCookies = this.updateCookies.bind(this);
  }

  componentDidMount() {    
    this.setState({
      totalCookies: Cookies.get('cookie')
    });
  }

  updateCookies(e) {
    let getCurrentCookie = Cookies.get('cookie');
    if (getCurrentCookie === undefined) {
        Cookies.set('cookie', 1);
    }
    else if (e.target.className === 'add') {
      Cookies.set('cookie', parseInt(getCurrentCookie) + 1);
    } else {
      Cookies.set('cookie', parseInt(getCurrentCookie) - 1);
    }
    this.setState({
      totalCookies: getCurrentCookie
    });
  }
  
  clearCookies() {
    Cookies.remove('cookie');
  }

  render() {
   return (
     <div>
       <h1>Welcome to React</h1>
       <h2>Cookies {this.state.totalCookies}</h2>
       <button type="button" onClick={this.updateCookies} className="add" ref="add"> Add </button>
       <button type="button" onClick={this.updateCookies} className="remove" ref="remove"> Remove </button>
       <button type="button" onClick={this.clearCookies} > Clear </button>

     </div>
   );
 }

}

export default App;
