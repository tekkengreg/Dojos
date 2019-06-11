import React, { Component } from "react";
import Cell from "./Cell.jsx";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: Math.floor(Math.random() * props.rows)
    };
  }

  render() {
    const { rows, counter } = this.props;
    const { activeIndex } = this.state;
    const cellArray = Array(rows).fill(0);
    return (
      <div className="Column" >
        {cellArray.map((item, index) => (
          <Cell
            key={`column-${index}`}
            isActive={(activeIndex + counter) % rows === index}
          />
        ))}
      </div>
    );
  }
}

export default componentName;
