import React, { Component } from "react";
import Square from "./Square";
import Robot from "./Robot";

import { GRID_SIZE, LEFT, RIGHT, TOP, BOTTOM } from "../../constants";

class Board extends Component {
  state = {
    xPos: 1,
    yPos: 1
  };

  moveRobot = direction => {
    const { xPos, yPos } = this.state;

    if (direction === LEFT) {
      if (xPos > 1) {
        this.setState({
          xPos: xPos - 1
        });
      }
    } else if (direction === RIGHT) {
      if (xPos < 5) {
        this.setState({
          xPos: xPos + 1
        });
      }
    } else if (direction === TOP) {
      if (yPos < 5) {
        this.setState({
          yPos: yPos + 1
        });
      }
    } else if (direction === BOTTOM) {
      if (yPos > 1)
        this.setState({
          yPos: yPos - 1
        });
    }
  };

  teleportRobot = (x, y) => {
    const { xPos, yPos } = this.state;
    let delay;
    if (Math.abs(x - xPos) > Math.abs(y - yPos))
      delay = Math.abs(x - xPos) * 1000;
    else delay = Math.abs(y - yPos) * 1000;

    setTimeout(() => {
      this.setState({
        xPos: Number(x),
        yPos: Number(y)
      });
    }, delay);
  };

  renderBoard() {
    let key;
    let board = [];

    for (let i = GRID_SIZE; i >= 1; --i) {
      for (let j = 1; j <= GRID_SIZE; ++j) {
        key = Number(i.toString() + j.toString());
        board.push(
          <Square
            key={key}
            xValue={j}
            yValue={i}
            teleport={this.teleportRobot}
          />
        );
      }
    }
    return board;
  }

  componentWillReceiveProps(nextProps) {
    this.moveRobot(nextProps.direction);
  }

  render() {
    const { xPos, yPos } = this.state;

    return (
      <div className="game-board">
        <div className="board">{this.renderBoard()}</div>
        <Robot xAxis={xPos} yAxis={yPos} />
      </div>
    );
  }
}

export default Board;
