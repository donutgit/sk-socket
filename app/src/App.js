import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import openSocket from "socket.io-client";
import Color from "./components/color";
const socket = openSocket("http://localhost:3001");
const subscribeToTimer = cb => {
  socket.on("timer", timestamp => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
};

class App extends Component {
  state = {
    timestamp: "none"
  };

  componentDidMount() {
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">timer value: {this.state.timestamp}</p>
        <br/>
        <br/>
        <Color />
      </div>
    );
  }
}

export default App;
