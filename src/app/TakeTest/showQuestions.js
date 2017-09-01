import React from 'react';
import TakeTestHeader from './header';
import Question from './question';
import ReviewQuestions from './reviewQuestions';

class ShowQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      providedAnswers: Array(this.getQuestions().length).fill(' ')
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

  providedAnswer(answer) {
    const _providedAnswers = this.state.providedAnswers.splice(0);
    _providedAnswers[this.state.currentIndex] = answer;
    this.setState({ providedAnswers: _providedAnswers });
  }

  reviewQuestions() {
    return this.state.providedAnswers;
  }

  handleDone() {
    console.log('Done' + this.state.providedAnswers);
  }

  render() {
    let currentQuestion = null;
    let buttonNextQuestion = null;
    if (!this.isLastQuestion()) {
      currentQuestion = (
        <Question
          question={this.getQuestions()[this.state.currentIndex].question}
          answer={this.state.providedAnswers[this.state.currentIndex]}
          useProvidedAnswer={this.providedAnswer.bind(this)}
        />
      );
      buttonNextQuestion = (
        <button type="submit" onClick={this.nextQuestion.bind(this)}>
          Next question
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
          Review questions
        </button>

        <div>
          <ReviewQuestions
            providedAnswers={this.state.providedAnswers}
            questions={this.getQuestions().slice(0, this.state.currentIndex)}
          />
        </div>
        <button type="submit" onClick={this.handleDone.bind(this)}>
          Submit test
        </button>
      </div>
    );
  }
}

export default ShowQuestions;
