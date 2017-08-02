import React from 'react';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      providedAnswer: ''
    };
  }

  updateProvidedAnswer(e) {
    this.setState({ providedAnswer: e.target.value });
    let providedAnswers =
      localStorage.getItem('providedAnswers') || new Map([]);

    localStorage.setItem('providedAnswers', {
      '': this.props.currentIndex,
      '': this.state.providedAnswer
    });
  }
  render() {
    return (
      <div>
        {this.props.question.question}
        <input
          type="text"
          placeholder="Your answer"
          value={this.state.providedAnswer}
          onChange={this.updateProvidedAnswer.bind(this)}
        />
      </div>
    );
  }
}

class StartTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      displayStartStyle: showStyle,
      displayQuestionStyle: hiddenStyle
    };
  }

  getQuestions() {
    return this.props.location.questions;
  }

  showQuestion() {
    this.setState({
      displayStartStyle: hiddenStyle,
      displayQuestionStyle: showStyle
    });
  }

  nextQuestion() {
    if (this.state.currentIndex === this.getQuestions().length - 1) {
      this.setState({ displayQuestionStyle: hiddenStyle });
    } else {
      const x = this.state.currentIndex + 1;
      this.setState({ currentIndex: x });
    }
  }

  reviewQuestions() {}

  render() {
    return (
      <div>
        CandidateName: {this.props.location.candidateName}
        <br />
        TestType: {this.props.location.testType}
        <br />
        <button
          type="submit"
          style={this.state.displayStartStyle}
          onClick={this.showQuestion.bind(this)}
        >
          Start Test
        </button>
        <div style={this.state.displayQuestionStyle}>
          <Question
            question={this.getQuestions()[this.state.currentIndex]}
            currentIndex={this.state.currentIndex}
          />
        </div>
        <button
          type="submit"
          style={this.state.displayQuestionStyle}
          onClick={this.nextQuestion.bind(this)}
        >
          Next Question
        </button>
        <button
          type="submit"
          style={this.state.displayQuestionStyle}
          onClick={this.reviewQuestions.bind(this)}
        >
          Review Questions
        </button>
      </div>
    );
  }
}

const hiddenStyle = {
  display: 'none'
};

const showStyle = {
  display: 'block'
};

export default StartTest;
