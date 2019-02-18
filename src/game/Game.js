import React, { Component } from "react";
import Board from "./board/Board";
import Button from "./Button";

import { LEFT, RIGHT, TOP, BOTTOM } from "../constants";

class Game extends Component {
  state = {
    direction: ""
  };

  move = direction => {
    this.setState({
      direction
    });
  };

  render() {
    const { direction } = this.state;

    return (
      <div className="game-container">
        <Board direction={direction} />

        <div className="game-controls">
          <div className="moving-controls">
            <Button
              className="top"
              direction={TOP}
              move={() => this.move(TOP)}
            />
            <div className="horizontal-controls">
              <Button
                className="left"
                direction={LEFT}
                move={() => this.move(LEFT)}
              />
              <Button
                className="right"
                direction={RIGHT}
                move={() => this.move(RIGHT)}
              />
            </div>
            <Button
              className="bottom"
              direction={BOTTOM}
              move={() => this.move(BOTTOM)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
