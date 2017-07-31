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
  constructor() {
    super();
    this.state = {
      candidateName: localStorage.getItem('candidateName'),
      testType: localStorage.getItem('testType'),
      currentIndex: 0,
      displayStartStyle: showStyle,
      displayQuestionStyle: hiddenStyle
    };
  }

  showQuestion() {
    this.setState({
      displayStartStyle: hiddenStyle,
      displayQuestionStyle: showStyle
    });
  }

  nextQuestion() {
    if (
      this.state.currentIndex ===
      QUESTIONS.get(this.state.testType).length - 1
    ) {
      this.setState({ displayQuestionStyle: hiddenStyle });
    } else {
      //debugger;
      const x = this.state.currentIndex + 1;
      this.setState({ currentIndex: x });
      console.log(
        x +
          '@' +
          this.state.currentIndex +
          '@' +
          QUESTIONS.get(this.state.testType).length
      );
    }
  }

  render() {
    return (
      <div>
        CandidateName: {this.state.candidateName}
        <br />
        TestType: {this.state.testType}
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
            question={
              QUESTIONS.get(this.state.testType)[this.state.currentIndex]
            }
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
          Review Question
        </button>
      </div>
    );
  }
}
const QUESTIONS = new Map([
  [
    'Java-Junior',
    [
      { question: 'jjQuestion1', answer: 'jjAnswer1' },
      { question: 'jjQuestion2', answer: 'jjAnswer2' },
      { question: 'jjQuestion3', answer: 'jjAnswer3' }
    ]
  ],
  [
    'Java-Medior',
    [
      { question: 'jmQuestion1', answer: 'jmAnswer1' },
      { question: 'jmQuestion2', answer: 'jmAnswer2' },
      { question: 'jmQuestion3', answer: 'jmAnswer3' }
    ]
  ],
  [
    'Java-Senior',
    [
      { question: 'jsQuestion1', answer: 'jsAnswer1' },
      { question: 'jsQuestion2', answer: 'jsAnswer2' },
      { question: 'jsQuestion3', answer: 'jsAnswer3' }
    ]
  ]
]);

const hiddenStyle = {
  display: 'none'
};

const showStyle = {
  display: 'block'
};

export default StartTest;
