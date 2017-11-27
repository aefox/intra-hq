import React from "react";

class TopicsComponent extends React.Component {

	renderTopics() {
		return this.props.topics.map(topic =>
			<li key={topic}>
				<div>
					{topic}
				</div>
				<button onClick={() => this.props.cb(topic)}>{this.props.buttonLabel}</button>
			</li>
		)
	}

	render() {
		return (
			<div className="topics">
				<ul className="topic-list">
					{this.renderTopics()}
				</ul>
			</div>
		)
	}
}

export default TopicsComponent;
