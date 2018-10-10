import React, { Component } from 'react';
import './App.css';

import Odd from './odd';

class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      nbr:0
    }
    setInterval(()=>
    this.setState({
      nbr: Math.floor(Math.random()*10)
    }),5000)
  }
  render() {
    console.log("App render")

    return (
      <div className="App">
      
        <Odd nbr={this.state.nbr} />
        
      </div>
    );
  }
}

export default App;
