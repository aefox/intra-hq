import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ProjectsItemList from './ProjectsItemList';

class EmployeeSummary extends Component {
  render() {
    const employee = this.props.employee;

    return (
      <div>
        <br />
        <strong>Employee Summary</strong>
        <table>
          <tbody>
            <tr>
              <td>Joined date</td>
              <td>
                {employee.joinDate}
              </td>
            </tr>
            <tr>
              <td>Techinical experience</td>
              <td>
                <ItemsList items={employee.technicalExperience} />
              </td>
            </tr>
            <tr>
              <td>Passions</td>
              <td>
                <ItemsList items={employee.hobbies} />
              </td>
            </tr>
            <tr>
              <td>Projects history</td>
              <td>
                <ProjectsItemList items={employee.projectsHistory} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeSummary;
