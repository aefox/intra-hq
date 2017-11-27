import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTrainingPaths, deletePath } from './service';

window.paths = [];

class TrainingPaths extends Component {
  state = {
    paths: []
  };

  componentDidMount() {
    getTrainingPaths().then(paths => {
      this.setState({ paths });
    });
  }

  renderPaths() {
    return this.state.paths.map(path => (
      <div key={path.id}>
        <div>{path.name}</div>
        <button onClick={() => this.removePath(path)}> X </button>
        <ul>{path.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      </div>
    ));
  }

  removePath(deletedPath) {
    deletePath(deletedPath.id).then(() => {
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
          <Link to="/add-path" className="add-path">
            Add path
          </Link>
          <div className="paths">{this.renderPaths()}</div>
        </div>
      </div>
    );
  }
}

export default TrainingPaths;
