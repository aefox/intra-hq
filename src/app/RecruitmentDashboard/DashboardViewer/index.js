import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import v4 from 'uuid';
import {
  getDashboardById,
  updateDashboard,
  defaultCandidates
} from '../service';
import AvailableCandidates from './AvailableCandidates';
import constants from '../constants';
import './style.css';

class DashboardViewer extends React.Component {
  state = {
    dashboard: null,
    isModalOpen: true
  };

  componentWillMount() {
    this.setState({
      dashboard: getDashboardById(this.props.match.params.id)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dashboard: getDashboardById(nextProps.match.params.id),
      isModalOpen: true
    });
  }

  onSaveButtonClick = () => {
    updateDashboard(this.state.dashboard);
    this.closeModal();
  };

  onMoveNextStageCandidate = (candidateId, currentStageIndex) => {
    const dashboard = this.state.dashboard;
    if (currentStageIndex != null) {
      dashboard.stages[currentStageIndex].candidates = dashboard.stages[
        currentStageIndex
      ].candidates.filter(itemId => itemId !== candidateId);
      dashboard.stages[currentStageIndex + 1].candidates.push(candidateId);
    } else {
      // Unnasigned item moved to first stage
      dashboard.stages[0].candidates.push(candidateId);
    }

    this.setState({ dashboard });
  };

  onAvailableCandidatesChanged = id => {
    this.onMoveNextStageCandidate(id, null);
  };

  getCandidateDisplayName = id => {
    const candidate = defaultCandidates.find(item => item.id === id);
    return candidate.name;
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.props.history.push(constants.baseUrl);
  };

  calculateUnassignedCandidates = () => {
    const unassignedCandidates = [];
    defaultCandidates.forEach(candidate => {
      let found = false;
      this.state.dashboard.stages.forEach(stage => {
        stage.candidates.forEach(candidateId => {
          if (candidateId === candidate.id) {
            found = true;
          }
        });
      });
      if (!found) {
        unassignedCandidates.push(candidate);
      }
    });
    return unassignedCandidates;
  };

  isNostLastStage = index => index < this.state.dashboard.stages.length - 1;

  render() {
    if (!this.state.dashboard) {
      return <div>Dashboard not found</div>;
    }

    const unassignedCandidates = this.calculateUnassignedCandidates();

    return (
      <Modal
        isOpen={this.state.isModalOpen}
        contentLabel="Modal"
        onRequestClose={this.closeModal}
      >
        <h1>
          {this.state.dashboard.name}
        </h1>
        <div className="stages">
          {this.state.dashboard.stages.map((stage, stageIndex) =>
            <div className="stage-column" key={v4()}>
              <div className="stage-column__header">
                {stage.name}
              </div>
              {stage.candidates.map(candidateId =>
                <div className="stage-column__cell" key={v4()}>
                  {this.getCandidateDisplayName(candidateId)}
                  {this.isNostLastStage(stageIndex) &&
                    <button
                      className="stage-move-next"
                      onClick={() =>
                        this.onMoveNextStageCandidate(candidateId, stageIndex)}
                    >
                      &raquo;
                    </button>}
                </div>
              )}
            </div>
          )}
          {this.state.dashboard.stages.length === 0 &&
            <span>
              This dashboard contains no defined stages. Please define one
              first!
            </span>}
        </div>
        <div className="stage-available-candidates">
          <AvailableCandidates
            availableCandidates={unassignedCandidates}
            onChange={this.onAvailableCandidatesChanged}
          />
        </div>

        <button onClick={this.onSaveButtonClick}>Save</button>
      </Modal>
    );
  }
}

DashboardViewer.propTypes = {
  match: PropTypes.shape().isRequired
};

export default DashboardViewer;
