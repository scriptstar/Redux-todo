import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="todo-list">
            <ul>
              <li>
                <input type="checkbox" />
                Create Static UI
              </li>
              <li>
                <input type="checkbox" />
                Create Intial State
              </li>
              <li>
                <input type="checkbox" />
                Use the State to Render the UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
