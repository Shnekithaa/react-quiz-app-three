import React, { Component } from 'react';
import "./Home.css";

export default class Home extends Component {

  handlePlayClick = () => {
    this.props.onStartQuiz();
  }

  render() {
    return (
      <div className='home-style'>
        <div>
            <h1>Quiz App</h1>
        </div>
        <div>
            <button className='play-button' onClick={this.handlePlayClick}>Play</button>
        </div>
      </div>
    );
  }
}
