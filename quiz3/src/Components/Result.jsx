import React, { Component } from 'react';
import "./Result.css";
import Quiz from './Quiz';
import Home from './Home';

export default class Result extends Component {

  constructor(props){
    super(props);
    this.state = {
      hasPlay: false,
      hasHome: false,
    }
  }

  handlePlay = () => {
    this.setState({hasPlay: true});
  }

  handleHome = () => {
    this.setState({hasHome: true});
  }

  render() {
    const { correctAnswers, attemptedQuestions } = this.props;
    const percentage = ((correctAnswers / 15) * 100).toFixed(2);
    const wrongAnswers = 15 - correctAnswers
    const {hasPlay, hasHome} = this.state;
    if(hasPlay){
      return <Quiz />
    }
    if(hasHome){
      return <Home />
    }
    return (
      <div className='result-card'>
        <h1 style={{color: "green", textAlign: 'center'}}>Result</h1>
        <div className='score-card'>
            <h2 style={{marginBottom: 0, fontSize: '18px'}}>You need more practice</h2>
            <h1 style={{color: 'blue'}}>Your score is <span>{percentage}%</span></h1>
            <div>
                <div className='score-analysis'>
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className='score-analysis'>
                    <p>Number of attempted questions</p>
                    <p>{attemptedQuestions}</p>
                </div>
                <div className='score-analysis'>
                    <p>Number of correct answers</p>
                    <p>{correctAnswers}</p>
                </div>
                <div className='score-analysis'>
                    <p>Number of wrong answers</p>
                    <p>{wrongAnswers}</p>
                </div>
            </div>
        </div>
        <div className='bottom-buttons'>
            <button style={{backgroundColor: 'white', border: '3px solid #7676D6', color: '#7676D6'}} onClick={this.handlePlay}>Play Again</button>
            <button style={{backgroundColor: 'white', border: '3px solid #008001', color: '#008001'}} onClick={this.handleHome}>Back to home</button>
        </div>
      </div>
    );
  }
}
