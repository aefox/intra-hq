import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import './style.css';

class DashboardEditor extends React.Component {
  state = {
    dashboard: this.props.dashboard
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ dashboard: nextProps.dashboard });
  }

  onDashboardNameChange = e => {
    const dashboard = this.state.dashboard;
    dashboard.name = e.target.value;
    this.setState({ dashboard });
  };

  onSaveButtonClick = () => {
    const { dashboard } = this.state;
    this.props.onSave(dashboard);
  };

  onCreateStageButtonClick = () => {
    const { dashboard } = this.state;
    const stage = { id: v4(), name: '', candidates: [] };
    dashboard.stages = dashboard.stages.concat(stage);
    this.setState({ dashboard });
  };

  updateStageName = (stageIndex, newName) => {
    const { dashboard } = this.state;
    dashboard.stages[stageIndex].name = newName;
    this.setState({ dashboard });
  };

  render() {
    const stageEditor = (
      <div className="stages-editor">
        <button onClick={this.onCreateStageButtonClick}>Create stage</button>
        {this.state.dashboard.stages.map((stage, idx) =>
          <div key={stage.id}>
            <input
              value={stage.name}
              onChange={e => this.updateStageName(idx, e.target.value)}
            />
          </div>
        )}
      </div>
    );

    return (
      <div className="dashboard-editor-template">
        <h1>{this.props.title}</h1>
        Dashboard name:
        <input
          value={this.state.dashboard.name}
          onChange={this.onDashboardNameChange}
        />
        {stageEditor}
        <button onClick={this.onSaveButtonClick}> Save </button>
      </div>
    );
  }
}

DashboardEditor.propTypes = {
  dashboard: PropTypes.shape().isRequired,
  onSave: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default DashboardEditor;
