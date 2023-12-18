import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'home',
    };
  }

  handleStartQuiz = () => {
    this.setState({ currentView: 'quiz' });
  };

  handleShowResult = () => {
    this.setState({ currentView: 'result' });
  };

  render() {
    const { currentView } = this.state;

    return (
      <div>
        {currentView === 'home' && <Home onStartQuiz={this.handleStartQuiz} />}
        {currentView === 'quiz' && <Quiz onShowResult={this.handleShowResult} />}
        {currentView === 'result' && <Result />}
      </div>
    );
  }
}

