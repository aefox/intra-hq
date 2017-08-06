import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Modal from 'react-modal';
import DashboardEditTemplate from '../DashboardEditTemplate';
import { addDashboard } from '../service';
import constants from '../constants';

class DashboardCreator extends React.Component {
  state = {
    dashboard: { name: '', id: v4(), stages: [] },
    isModalOpen: true
  };

  onModalRequestClose = () => {
    this.setState({ isModalOpen: false });
  };

  onCreateDashboard = () => {
    addDashboard(this.state.dashboard);
    this.setState({ isModalOpen: false });
    this.props.history.push(constants.baseUrl);
  };

  render() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        contentLabel="Modal"
        onRequestClose={this.onModalRequestClose}
      >
        <div className="dashboard-creator">
          <DashboardEditTemplate
            title="Create"
            dashboard={this.state.dashboard}
            onSave={this.onCreateDashboard}
          />
        </div>
      </Modal>
    );
  }
}

DashboardCreator.propTypes = {
  onCreateDashboard: PropTypes.func
};

export default DashboardCreator;
