// Quiz.jsx
import React, { Component } from 'react';
import './Quiz.css';
import quizQuestion from '../resources/quizQuestion.json';
import Result from './Result';

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currQuestionIndex: 0,
      questions: quizQuestion,
      hasQuit: false,
      hasFinish: false,
      correctAnswers: 0,
      attemptedQuestions: 0,
    };
  }

  handleClick = (selectedOption) => {
    const { currQuestionIndex, questions } = this.state;
    const currentQuestion = questions[currQuestionIndex];

    const isCorrect = (selectedOption === currentQuestion.answer);

    if (isCorrect) {
      alert('Correct Answer!');
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1,
      }));
    } else {
      alert('Wrong Answer! The correct answer is: ' + currentQuestion.answer);
    }

    this.setState((prevState) => ({
      currQuestionIndex: Math.min(prevState.currQuestionIndex + 1, questions.length - 1),
      attemptedQuestions: prevState.attemptedQuestions + 1,
    }));
  };

  handlePrevious = () => {
    this.setState((prevState) => ({
      currQuestionIndex: Math.max(prevState.currQuestionIndex - 1, 0),
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currQuestionIndex: Math.min(prevState.currQuestionIndex + 1, this.state.questions.length - 1),
    }));
  };

  handleQuit = () => {
    const quitConfirmation = window.confirm('Are you sure you want to quit?');
    if (quitConfirmation) {
      this.setState({ hasQuit: true });
    }
  };

  handleFinish = () => {
    this.setState({ hasFinish: true });
  };

  render() {
    const { currQuestionIndex, questions, hasQuit, hasFinish, correctAnswers, attemptedQuestions } = this.state;
    const currentQuestion = questions[currQuestionIndex];

    if (hasQuit || hasFinish) {
      return <Result correctAnswers={correctAnswers} attemptedQuestions={attemptedQuestions} />;
    }

    return (
      <div className='container'>
        <div className='card'>
          <h1>Question</h1>
          <h3>
            <span>{currQuestionIndex + 1}</span> of {questions.length}
          </h3>
          <h2>{currentQuestion.question}</h2>
          <div className='buttons'>
            <button onClick={() => this.handleClick(currentQuestion.optionA)}>{currentQuestion.optionA}</button>
            <button onClick={() => this.handleClick(currentQuestion.optionB)}>{currentQuestion.optionB}</button>
          </div>
          <div className='buttons'>
            <button onClick={() => this.handleClick(currentQuestion.optionC)}>{currentQuestion.optionC}</button>
            <button onClick={() => this.handleClick(currentQuestion.optionD)}>{currentQuestion.optionD}</button>
          </div>
          <div className='bottom-buttons'>
            <button style={{ backgroundColor: '#3E7EAA' }} onClick={this.handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: '#008001' }} onClick={this.handleNext}>
              Next
            </button>
            <button style={{ backgroundColor: '#FF0000' }} onClick={this.handleQuit}>
              Quit
            </button>
            <button style={{ backgroundColor: 'gray' }} onClick={this.handleFinish}>
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }
}
