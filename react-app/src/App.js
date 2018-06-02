import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "hello"
    }
    this.changeText = this.changeText.bind(this)
  }

  changeText() {
    this.setState({ text: "world" })
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeText}>click</button>
        <Profile/>
      </div>
    );
  }
}

export default App;
