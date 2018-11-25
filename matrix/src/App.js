import React, { Component } from 'react';
import './App.css';

import Column from './Column.jsx'

const style = {
  App: {
    minWidth: '100%',
    display: 'inline-flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      columns: 100,
      rows: 100,
    }
    setInterval((params) => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  render() {
    const { count, columns, rows } = this.state

    return (
      <div className="App" style={style.App} >
        {
          Array(columns).fill(0).map((x, i) => <Column key={"column" + i} rows={rows} count={count} />)
        }
      </div>
    );
  }
}

export default App;
