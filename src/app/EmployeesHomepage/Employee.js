import React, { PropTypes } from 'react';

export class Employee extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      employeeId: props.id,
      employee: props.employee
    };
  }

  render() {
    let employee = this.state.employee;
    return (
      <tr>
        <td>
          {employee.name}
        </td>
        <td>
          {employee.position}
        </td>
        <td>
          {employee.technology}
        </td>
        <td>
          {employee.project}
        </td>
        <td>
          {employee.manager}
        </td>
      </tr>
    );
  }
}

export default Employee;
