import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PathsListComponent from "./PathsListComponent";
import PathService from "../../PathService";

var service = new PathService();

class TrainingPaths extends Component {
	state = {
		paths: []
	};

	componentWillMount() {
		service.getPath()
			.then(response => response.json())
			.then(paths => {
				this.setState({ paths });
			});
	}

	removePath = (deletedPath) => {
		service.deletePath(deletedPath)
			.then(() => {
				this.setState({
					paths: this.state.paths.filter(path => path !== deletedPath)
				});
			});
	}

	render() {
		return (
			<div>
				<div className="menu-left" />
				<div className="work-area">
					<h1 className="title">Paths</h1>
					<Link to="/training-paths/add-path" className="add-path">
						Add path
          </Link>
					<PathsListComponent paths={this.state.paths} cb={this.removePath} />
				</div>
			</div>
		);
	}
}

export default TrainingPaths;
