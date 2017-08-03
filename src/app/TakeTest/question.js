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

export default Question;
