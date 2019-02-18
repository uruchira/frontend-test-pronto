import React, { Component } from "react";
import Game from "./game/Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="page-title">Moving Robot</h1>
        <p>Coding Challenge – Senior Software Engineer (Front-End)</p>
        <Game />
      </div>
    );
  }
}

export default App;
