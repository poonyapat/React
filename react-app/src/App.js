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
      <div className="background">
        <HeaderTab />
        <Profile />
      </div>
    );
  }
}

class HeaderTab extends Component {
  render() {
    return (
      <ul className="alpha_ul alpha_ul_top">
        <a><li className="alpha_li">Home</li></a>
        <a><li className="alpha_li">Schedule</li></a>
        <a><li className="alpha_li">Contact</li></a>
        <a><li className="alpha_li">About</li></a>
      </ul>
    )
  }
}

export default App;
