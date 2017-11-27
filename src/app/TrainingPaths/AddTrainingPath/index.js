import React from 'react';
import { addTrainingPath } from '../service';
import { connect } from 'react-redux';

class AddTrainingPath extends React.Component {
  state = {
    topics: ['SQL', 'REST', 'JS', 'REACT', 'NODE.JS'],
    selectedTopics: [],
    name: '',
    isLoading: false,
    errorMessage: null
  };

  addToSelectedTopics(topicName) {
    this.setState({
      selectedTopics: [...this.state.selectedTopics, topicName],
      topics: this.state.topics.filter(topic => topic !== topicName)
    });
  }

  removeSelectedTopic(topicName) {
    this.setState({
      selectedTopics: this.state.selectedTopics.filter(
        topic => topic !== topicName
      ),
      topics: [...this.state.topics, topicName]
    });
  }

  renderTopics() {
    return this.state.topics.map(topic => (
      <li key={topic}>
        <div>{topic}</div>
        <button onClick={() => this.addToSelectedTopics(topic)}>Add</button>
      </li>
    ));
  }

  renderSelectedTopics() {
    return this.state.selectedTopics.map(topic => (
      <li key={topic}>
        <div>{topic}</div>
        <button onClick={() => this.removeSelectedTopic(topic)}>Remove</button>
      </li>
    ));
  }

  savePath() {
    this.setState({ isLoading: true });

    const path = { name: this.state.name, topics: this.state.selectedTopics };
    addTrainingPath(path).then(
      response => {
        this.props.dispatch({
          type: 'ADD_PATH',
          path: response
        });

        this.setState({ isLoading: false });
        this.props.history.goBack();
      },
      () => {
        this.setState({
          isLoading: false,
          errorMessage: 'An error occured. Please try again.'
        });
      }
    );
  }

  render() {
    if (this.state.isLoading) {
      return <p> Loading.. </p>;
    }

    return (
      <div>
        <div className="topics">
          <ul className="topic-list">{this.renderTopics()}</ul>
        </div>

        <input
          type="text"
          className="path-name"
          placeholder="Path name.."
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <div className="topics">
          <ul className="selected-topic-list">{this.renderSelectedTopics()}</ul>
        </div>
        <div className="topics" />
        <button onClick={() => this.savePath()}> Save </button>

        {this.state.errorMessage && (
          <p className="error-message"> {this.state.errorMessage} </p>
        )}
      </div>
    );
  }
}

AddTrainingPath = connect()(AddTrainingPath);

export default AddTrainingPath;
