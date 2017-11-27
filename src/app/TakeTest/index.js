import React from 'react';
import CreateANewTest from './createANewTest';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import TestApp from './reducers';
import { fetchQuestions } from './actions';

const defaultState = {
  questions: []
};
const store = createStore(TestApp, defaultState);

class TakeTestHome extends React.Component {
  state = {
    questions: []
  };

  componentWillMount() {
    fetch('http://localhost:3000/testTypes')
      .then(response => {
        return response.json();
      })
      .then(data => {
        store.dispatch(fetchQuestions(data));
      })
      .catch(e => {
        console.log(e);
      });

    store.subscribe(() => {
      this.setState({
        questions: store.getState()
      });
    });
  }

  render() {
    return (
      <div className="container-fluid col-md-12">
        <CreateANewTest questions={this.state.questions} />
      </div>
    );
  }
}

export default TakeTestHome;
