import React from 'react';
import TopicsComponent from "./TopicsComponent";
import PathNameComponent from "./PathNameComponent";
import PathService from "../../../PathService";

var service = new PathService();

class AddTrainingPath extends React.Component {
	state = {
		topics: ['SQL', 'REST', 'JS', 'REACT', 'NODE.JS'],
		selectedTopics: [],
		name: ''
	};

	addToSelectedTopics = (topicName) => {
		this.setState({
			selectedTopics: [...this.state.selectedTopics, topicName],
			topics: this.state.topics.filter(topic => topic !== topicName)
		});
	}

	removeSelectedTopic = (topicName) => {
		this.setState({
			selectedTopics: this.state.selectedTopics.filter(
				topic => topic !== topicName
			),
			topics: [...this.state.topics, topicName]
		});
	}

	renderSelectedTopics() {
		return this.state.selectedTopics.map(topic =>
			<li key={topic}>
				<div>
					{topic}
				</div>
				<button onClick={() => this.removeSelectedTopic(topic)}>Remove</button>
			</li>
		);
	}

	savePath() {
		const path = { name: this.state.name, topics: this.state.selectedTopics };

		service.addPath(path).then(() => {
			this.props.history.goBack();
		});
	}

	setPathName = (event) => {
		this.setState({ name: event.target.value })
	}

	render() {
		return (
			<div>
				<TopicsComponent cb={this.addToSelectedTopics} topics={this.state.topics} buttonLabel="add" />

				<PathNameComponent cb={this.setPathName}/>

				<TopicsComponent cb={this.removeSelectedTopic} topics={this.state.selectedTopics} buttonLabel="remove" />

				<button onClick={() => this.savePath()}> Save </button>
			</div>
		);
	}
}

export default AddTrainingPath;
