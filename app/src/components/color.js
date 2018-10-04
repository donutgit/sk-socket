import React, { Component } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");

class Color extends Component {
  state = {
    color: "red"
  };

  onColor = color => {
    this.setState({ color });
  };

  onSend = color => {
    socket.emit("change color", color);
  };

  componentDidMount() {
    socket.on('change color', (color) => {
      this.setState({ color });
    })
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: this.state.color, height: "100px" }}>
          change color
        </div>
        <button onClick={() => this.onSend("red")}>red</button>
        <button onClick={() => this.onSend("green")}>green</button>
      </div>
    );
  }
}

export default Color;
