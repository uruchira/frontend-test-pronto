import React, { Component } from "react";

class Square extends Component {
  render() {
    const { xValue, yValue, teleport } = this.props;

    return (
      <div
        className="board-tile"
        onClick={() => {
          teleport(xValue, yValue);
        }}
      />
    );
  }
}

export default Square;
