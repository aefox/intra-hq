import React, { Component } from 'react';
import Question from './question';

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
  }

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
  shouldComponentUpdate(nextProps) {
    return true;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      providedAnswers: nextProps.providedAnswers,
      questions: nextProps.questions
    });
  }
  render() {
    return (
      <div>
        {this.getReviewedItems()}
      </div>
    );
  }
}
export default ReviewQuestions;
