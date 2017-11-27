import React, { Component } from 'react';
import Question from './question';
import './style.css';

class ReviewQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providedAnswers: this.props.providedAnswers,
      questions: this.props.questions
    };
  }

  providedAnswer(answer) {
    const _providedAnswers = this.state.providedAnswers.splice(0);
    _providedAnswers[this.state.currentIndex] = answer;
    this.setState({ providedAnswers: _providedAnswers });
    this.props.onAnswersChange(_providedAnswers, false);
  }

  saveChanges = () => {
    this.props.onAnswersChange(this.state.providedAnswers, true);
  };

  getReviewedItems() {
    let reviewedItems = [];
    this.state.questions.forEach(function(question, index) {
      reviewedItems.push(
        <Question
          key={index}
          question={question.question}
          answer={this.state.providedAnswers[index]}
          useProvidedAnswer={this.providedAnswer.bind(this)}
        />
      );
    }, this);

    return reviewedItems;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      providedAnswers: nextProps.providedAnswers,
      questions: nextProps.questions
    });
  }
  render() {
    return (
      <div className={this.props.shouldDisplay ? '' : 'hidden'}>
        <br />
        {this.getReviewedItems()}
        <br />
        <div>
          <button type="submit" onClick={this.saveChanges.bind(this)}>
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}
export default ReviewQuestions;
