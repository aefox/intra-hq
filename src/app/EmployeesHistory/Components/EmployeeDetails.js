import React from 'react';
import ProjectsHistoryDetails from './ProjectsHistoryDetails';
import Evaluations from './Evaluations';

class EmployeeDetails extends React.Component {
  state = {
    projectsHistory: [],
    evaluations: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      projectsHistory: nextProps.employee.projectsHistory,
      evaluations: nextProps.employee.employeeEvaluations
    });
  }

  render() {
    return (
      <div>
        <strong>Employee Details</strong>
        <hr style={{ borderTop: 'dotted 1p' }} />
        <ProjectsHistoryDetails projectsHistory={this.state.projectsHistory} />
        <br />
        <Evaluations evaluations={this.state.evaluations} />
      </div>
    );
  }
}

export default EmployeeDetails;
