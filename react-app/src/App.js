import React, { Component } from 'react';
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
        <Profile/>
      </div>
    );
  }
}

export default App;
