import React from 'react';
import EmployeeDetails from './Components/EmployeeDetails';
import EmployeeSummary from './Components/EmployeeSummary';
import EmployeeHistoryProvider from './employeeHistoryProvider';
import './EmployeeHistory.css';

const employeeProvider = new EmployeeHistoryProvider();

class EmployeeHistory extends React.Component {
  employeeId = 1;
  state = { currentEmployee: {} };

  componentDidMount() {
    employeeProvider.getEmployee(this.employeeId).then(data => {
      this.setState({ currentEmployee: data });
    });
  }

  render() {
    return (
      <div>
        <EmployeeSummary employee={this.state.currentEmployee} />
        <br />
        <br />
        <EmployeeDetails employee={this.state.currentEmployee} />
      </div>
    );
  }
}
export default EmployeeHistory;
