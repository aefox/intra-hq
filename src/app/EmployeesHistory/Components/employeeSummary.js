import React, { Component } from 'react';
import ItemsList from './itemsList';
import EmployeeHistoryProvider from '../employeeHistoryProvider';

class EmployeeSummary extends Component {
  state = {
    employee: EmployeeHistoryProvider.getEmployeeSummaryModel()
  };

  render() {
    const currentEmployee = this.state.employee;

    return (
      <div>
        <br />
        <strong>Employee Summary</strong>
        <table>
          <tbody>
            <tr>
              <td>Joined date</td>
              <td>
                {EmployeeHistoryProvider.getFormatedDate(
                  currentEmployee.joinedDate
                )}
              </td>
            </tr>
            <tr>
              <td>Techinical experience</td>
              <td>
                <ItemsList items={currentEmployee.techExperience} />
              </td>
            </tr>
            <tr>
              <td>Passions</td>
              <td>
                <ItemsList items={currentEmployee.hobbies} />
              </td>
            </tr>
            <tr>
              <td>Projects history</td>
              <td>
                <ItemsList items={currentEmployee.projectsHistory} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeSummary;
