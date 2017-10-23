import React from 'react';

class AddTrainingPath extends React.Component {
  state = {
    topics: ['SQL', 'REST', 'JS', 'REACT', 'NODE.JS'],
    selectedTopics: [],
    name: ''
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
    const path = { name: this.state.name, topics: this.state.selectedTopics };

    fetch('http://localhost:9000/paths', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(path)
    }).then(() => {
      this.props.history.goBack();
    });
  }

  render() {
    return (
      <div>
        <div className="topics">
          <ul className="topic-list">{this.renderTopics()}</ul>
        </div>

        <input
          type="text"
          className="path-name"
          placeholder="Path name.."
          onChange={event => this.setState({ name: event.target.value })}
        />
        <div className="topics">
          <ul className="selected-topic-list">{this.renderSelectedTopics()}</ul>
        </div>
        <div className="topics" />
        <button onClick={() => this.savePath()}> Save </button>
      </div>
    );
  }
}

export default AddTrainingPath;
