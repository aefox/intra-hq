import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import DashboardEditTemplate from '../DashboardEditTemplate';
import { getDashboardById, updateDashboard } from '../service';
import constants from '../constants';

class DashboardEditor extends React.Component {
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

  onSave = () => {
    updateDashboard(this.state.dashboard);
    this.closeModal();
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.props.history.push(constants.baseUrl);
  };

  render() {
    if (!this.state.dashboard) {
      return <div>Dashboard not found</div>;
    }
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        contentLabel="Modal"
        onRequestClose={this.closeModal}
      >
        <DashboardEditTemplate
          title="Edit"
          dashboard={this.state.dashboard}
          onSave={this.onSave}
        />
      </Modal>
    );
  }
}

DashboardEditor.propTypes = {
  match: PropTypes.shape().isRequired
};

export default DashboardEditor;
