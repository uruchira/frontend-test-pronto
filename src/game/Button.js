import React, { Component } from "react";

class Button extends Component {
  render() {
    const { direction, move, className } = this.props;

    return <button className={className} onClick={() => move(direction)} />;
  }
}

export default Button;
