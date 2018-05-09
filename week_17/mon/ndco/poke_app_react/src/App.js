import React, { Component, PropTypes } from 'react';
import './App.css';

const data = [
  { name: 'andy', mobileNum:1231231234, email: 'andy@gmail.com' },
  { name: 'bandy', mobileNum: 1112223333, email: 'bandy@gmail.com' },
  { name: 'candy', mobileNum: 3213213210, email: 'candy@gmail.com' }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    this.updateState();
  }
  updateState() {
    this.setState({data})
  }

  render() {
    return (
      <div>
        <h1>Contact Cards: </h1>
        {
          this.state.data.map((data) => {
            return (
              <div>
              <h2>Name: {this.state.data.data.name}</h2>
              <h2>Mobile Num: {this.state.mobileNum}</h2>
              <h2>Work Phone Num: {this.state.workPhoneNum}</h2>
              <h2>Email: {this.state.email}</h2>
              </div>
            )
          })
        }
      </div>
    )
  }
}

// App.propTypes = {
//   name: PropTypes.number.isRequired,
//   mobileNum: PropTypes.number.isRequired,
//   workPhoneNum: PropTypes.number,
//   email: PropTypes.string.isRequired
// }

export default App;
