import React from "react";

class PathsListComponent extends React.Component {

	renderPaths(){
		let paths =this.props.paths;
		return this.props.paths.map(path =>
				<div>
					<div>
						{path.name}
					</div>
					<button onClick={() => this.props.cb(path)}> X </button>
					<ul>
						{path.topics.map(topic =>
							<li>
								{topic}
							</li>
						)}
					</ul>
				</div>
			)
	}

	render() {
		return (
			<div className="paths">{this.renderPaths()}</div>
			)
	}
}

export default PathsListComponent;
