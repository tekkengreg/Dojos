import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      number: 0,
    }
    setInterval(() => {
      const num = Math.floor(Math.random() * 10)
      this.props.isOddOrEven(num)
      this.setState({
        number: num
      })
    }, 1000)
  }

  render() {
    const { number } = this.state
    return (
      <span className="App">
        {number}
      </span>
    );
  }
}

export default App;
