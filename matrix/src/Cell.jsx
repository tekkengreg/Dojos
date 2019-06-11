import React, { Component } from "react";

const opacityRef = 0.3;

class Cell extends Component {
  constructor(props, context) {
    super(props, context);
    this.char = this.getChar();
    this.style = {
      color: "grey"
    };
    this.opacity = opacityRef;
  }

  getChar() {
    return String.fromCharCode(Math.floor(Math.random() * 1000 + 192));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return(nextProps.isActive || this.opacity > opacityRef)
      
  }

  render() {
    const { isActive } = this.props;
    if (isActive) {
      this.style.color = "blue";
      this.opacity = 1;
      this.char = this.getChar();
    } else {
      this.style.color = "grey";
      if (this.opacity > opacityRef) this.opacity -= 0.1;
    }

    return (
      <span
        className="Cell"
        style={{ ...this.style, filter: "opacity(" + this.opacity + ")" }}
      >
        {this.char}
      </span>
    );
  }
}

export default Cell;
