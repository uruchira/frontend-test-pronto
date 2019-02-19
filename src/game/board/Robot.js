import React, { Component } from "react";
import robot from "../../assets/robot.svg";

import { CELL_GAP, INITIAL_DISTANCE } from "../../constants";

class Robot extends Component {
  render() {
    const { xAxis, yAxis } = this.props;
    const left = (xAxis - 1) * CELL_GAP + INITIAL_DISTANCE;
    const bottom = (yAxis - 1) * CELL_GAP + INITIAL_DISTANCE;

    return (
      <img className="robot" alt="Robot" src={robot} style={{ left, bottom }} />
    );
  }
}

export default Robot;
