import React from 'react';
import TakeTestHeader from './header';
import Question from './question';

class ShowQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  getQuestions() {
    return this.props.location.questions;
  }

  nextQuestion() {
    if (!this.isLastQuestion()) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  }

  isLastQuestion() {
    return this.state.currentIndex === this.getQuestions().length;
  }

  reviewQuestions() {}

  render() {
    let currentQuestion = null;
    let buttonNextQuestion = null;
    if (!this.isLastQuestion()) {
      currentQuestion = (
        <Question
          question={this.getQuestions()[this.state.currentIndex]}
          currentIndex={this.state.currentIndex}
        />
      );
      buttonNextQuestion = (
        <button type="submit" onClick={this.nextQuestion.bind(this)}>
          Next Question
        </button>
      );
    }

    return (
      <div>
        <TakeTestHeader
          candidateName={this.props.location.candidateName}
          testType={this.props.location.testType}
        />
        {currentQuestion}
        {buttonNextQuestion}
        <button type="submit" onClick={this.reviewQuestions.bind(this)}>
          Review Questions
        </button>
      </div>
    );
  }
}

export default ShowQuestions;
