import React, { Component } from "react";
import robot from "../../assets/robot.svg";

class Robot extends Component {
  render() {
    const { xAxis, yAxis } = this.props;
    const left = (xAxis - 1) * 100 + 25;
    const bottom = (yAxis - 1) * 100 + 25;

    return (
      <img className="robot" alt="Robot" src={robot} style={{ left, bottom }} />
    );
  }
}

export default Robot;
