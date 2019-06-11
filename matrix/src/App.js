import React, { Component } from "react";
import "./App.scss";

import Column from "./Column.jsx";

const columns = 100;
const rows = 40;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 500);
  }

  render() {
    const { counter } = this.state;
    const colArray = Array(columns).fill(0);
    return (
      <div className="App">
        <h1>
          Matrix in React
          <br />
          No canvas
        </h1>
        {colArray.map((col, index) => (
          <Column key={`column-${index}`} rows={rows} counter={counter} />
        ))}
      </div>
    );
  }
}

export default App;
