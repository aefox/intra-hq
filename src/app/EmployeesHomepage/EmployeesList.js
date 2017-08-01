import React from 'react';
import Employee from './Employee';
import EmployeeFilter from './EmployeeFilter';

export class EmployeesList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      employees: props.employees,
      employeesFiltered: props.employeesFiltered
    };
    this.getUnique = this.getUnique.bind(this);
    this.filterByCriteria = this.filterByCriteria.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      employeesFiltered: props.employeesFiltered
    });
    debugger;
  }

  getUnique(data, criteria) {
    let list = [];
    for (let item of data) {
      if (list.indexOf(item[criteria]) === -1) {
        list.push(item[criteria]);
      }
    }
    return list;
  }

  filterByCriteria(criteria, valueToFilter) {
    let employeesFiltered = [];
    employeesFiltered = this.state.employees.filter(function(employee) {
      if (employee[criteria] === valueToFilter) {
        return employee;
      }
    });
    debugger;
    this.setState = {
      employeesFiltered: employeesFiltered
    };
  }

  render() {
    let employeesFiltered = this.state.employeesFiltered;
    debugger;
    let employees = this.state.employees;
    let positionFilter = this.getUnique(employees, 'position');
    let technologyFilter = this.getUnique(employees, 'technology');
    let projectFilter = this.getUnique(employees, 'project');
    let managerFilter = this.getUnique(employees, 'manager');
    let filters = [
      positionFilter,
      technologyFilter,
      projectFilter,
      managerFilter
    ];
    return (
      <div className="Employees">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Position </th>
              <th> Technology </th>
              <th> Project </th>
              <th> Manager </th>
            </tr>
          </thead>
          <tbody>
            <EmployeeFilter
              filters={filters}
              filterByCriteria={this.filterByCriteria}
            />
            {employeesFiltered.map(employee =>
              <Employee key={employee.id} employee={employee} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeesList;
