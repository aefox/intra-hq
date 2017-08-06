import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardList from './DashboardList';
import DashboardEditor from './DashboardEditor';
import DashboardViewer from './DashboardViewer';
import DashboardCreator from './DashboardCreator';
import DashboardNavBar from './DashboardNavBar';
import { getAllDashboards } from './service';
import './style.css';

class RecruitmentDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      dashboards: null
    };
  }

  componentWillMount() {
    this.setState({
      dashboards: getAllDashboards()
    });
  }

  componentWillReceiveProps() {
    this.setState({
      dashboards: getAllDashboards()
    });
  }

  render() {
    return (
      <div className="dashboard">
        <DashboardNavBar url={this.props.match.url} />

        <DashboardList
          dashboards={this.state.dashboards}
          match={this.props.match}
        />

        <Route
          path={`${this.props.match.url}/edit/:id`}
          component={DashboardEditor}
        />
        <Route
          path={`${this.props.match.url}/view/:id`}
          component={DashboardViewer}
        />
        <Route
          path={`${this.props.match.url}/new-dashboard`}
          component={DashboardCreator}
        />
      </div>
    );
  }
}

export default RecruitmentDashboard;
