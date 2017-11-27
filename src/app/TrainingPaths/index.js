import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTrainingPaths, deletePath } from './service';

class TrainingPaths extends Component {
  componentDidMount() {
    getTrainingPaths().then(paths => {
      this.props.dispatch({ type: 'UPDATE_PATHS', paths });
    });
  }

  renderPaths() {
    return this.props.paths.map(path => (
      <div key={path.id}>
        <div>{path.name}</div>
        <button onClick={() => this.removePath(path)}> X </button>
        <ul>{path.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      </div>
    ));
  }

  removePath(deletedPath) {
    deletePath(deletedPath.id).then(() => {
      this.props.dispatch({
        type: 'DELETE_PATH',
        deletedPathId: deletedPath.id
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

const mapStateToProps = store => ({ paths: store.trainingPaths });

TrainingPaths = connect(mapStateToProps)(TrainingPaths);

export default TrainingPaths;
