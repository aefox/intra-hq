import React from 'react';
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
    return this.state.currentIndex === this.getQuestions().length - 1;
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
        CandidateName: {this.props.location.candidateName}
        <br />
        TestType: {this.props.location.testType}
        <br />
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
