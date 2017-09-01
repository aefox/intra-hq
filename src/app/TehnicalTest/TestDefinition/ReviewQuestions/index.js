import React from 'react';
import { v4 } from 'uuid';
import Modal from 'react-modal';
import { Link, Route } from 'react-router-dom';
import Responses from '../Responses';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ReviewQuestions extends React.Component {
  state = {
    modalIsOpen: false,
    rate: 1,
    feedback: '',
    question: null,
    questions: []
  };

  requestCloseFn = () => {
    this.setState({ modalIsOpen: false });
  };

  rate = question => {
    return () =>
      this.setState({
        modalIsOpen: true,
        question
      });
  };

  submitRate = () => {
    this.state.question.rates.push(this.state.rate);
    if (this.state.feedback && this.state.feedback.length > 0) {
      this.state.question.feedbacks.push(this.state.feedback);
    }
    this.setState({ modalIsOpen: false, question: null, rate: 1 });
  };

  handleRateChange = event => {
    this.setState({ rate: parseInt(event.target.value, 10) });
  };

  handleFeedbackChange = event => {
    this.setState({ feedback: event.target.value });
  };

  componentWillMount() {
    let _this = this;
    console.log(
      'http://localhost:3001/questions?category=' +
        this.props.match.params.questionCategory +
        '&state=review'
    );
    fetch(
      'http://localhost:3001/questions?category=' +
        this.props.match.params.questionCategory +
        '&state=review'
    ).then(function(response) {
      response.json().then(function(data) {
        let questions = data;
        _this.setState({ questions });
      });
    });
  }

  render() {
    const { match } = this.props;

    const avg = rates => {
      if (rates.length === 0) {
        return 0;
      }
      var sum = rates.reduce(function(a, b) {
        return a + b;
      });
      return sum / rates.length;
    };

    return (
      <div>
        <div>
          <div>
            {this.state.questions.map(question =>
              <li key={v4()}>
                <Link to={`${match.url}/responses/${question.id}`}>
                  {question.title}
                </Link>, {question.feedbacks.length}, {avg(question.rates)},{' '}
                <button onClick={this.rate(question)}>Rate</button>
              </li>
            )}
          </div>

          <Route path={`${match.url}/responses/:id`} component={Responses} />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.requestCloseFn}
          style={customStyles}
          contentLabel="Modal"
        >
          Rate:
          <br />
          <br />
          <select value={this.state.rate} onChange={this.handleRateChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <br />
          Feedback:
          <br />
          <br />
          <textarea
            rows="4"
            cols="50"
            value={this.state.feedback}
            onChange={this.handleFeedbackChange}
          />
          <br />
          <button onClick={this.submitRate}>Submit</button>
        </Modal>
      </div>
    );
  }
}

export default ReviewQuestions;
