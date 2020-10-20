import React from 'react';
import Employee from './Employee';
import EmployeeFilter from './EmployeeFilter';
import Pagination from './Pagination';

export class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      employeesFiltered: [],
      activeFiltersCriteria: {},
      filters: [],
      currentPage: 1,
      numberOfItemsPerPage: 5
    };
    this.getUnique = this.getUnique.bind(this);
    this.filterByCriteria = this.filterByCriteria.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      employeesFiltered: props.employeesFiltered
    });
  }

  componentWillMount() {
    const _this = this;

    fetch('http://localhost:9000/employees')
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }
        response.json().then(function(data) {
          let positionFilter = _this.getUnique(data, 'position');
          let technologyFilter = _this.getUnique(data, 'technology');
          let projectFilter = _this.getUnique(data, 'project');
          let managerFilter = _this.getUnique(data, 'manager');
          let filters = [
            positionFilter,
            technologyFilter,
            projectFilter,
            managerFilter
          ];
          const x = {
            employees: data,
            employeesFiltered: data.slice(),
            filters: filters
          };
          console.log(x);
          _this.setState(x);
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
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
    let activeFiltersCriteria = this.state.activeFiltersCriteria;
    if (activeFiltersCriteria[criteria]) {
      activeFiltersCriteria[criteria] = valueToFilter;
    } else {
      activeFiltersCriteria[criteria] = valueToFilter;
    }
    employeesFiltered = this.state.employees.filter(employee => {
      let isValid = true;
      let keys = Object.keys(activeFiltersCriteria);
      keys.forEach(function(element) {
        if (
          employee[element] !== activeFiltersCriteria[element] &&
          activeFiltersCriteria[element] !== 'empty'
        ) {
          isValid = false;
        }
      }, this);
      return isValid;
    });
    this.setState({
      employeesFiltered: employeesFiltered
    });
  }

  changeCurrentPage(currentPage) {
    this.setState({
      currentPage: currentPage
    });
  }

  render() {
    let employeesFiltered = this.state.employeesFiltered;
    let that = this;
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
              filters={this.state.filters}
              filterByCriteria={this.filterByCriteria}
            />
            {employeesFiltered
              .filter(function(employee, index) {
                if (
                  index >=
                    (that.state.currentPage - 1) *
                      that.state.numberOfItemsPerPage &&
                  index <
                    that.state.numberOfItemsPerPage * that.state.currentPage
                ) {
                  return employee;
                }
                return null;
              })
              .map(employee =>
                <Employee key={employee.id} employee={employee} />
              )}
          </tbody>
        </table>
        <Pagination
          items={employeesFiltered}
          currentPage={this.state.currentPage}
          numberOfItemsPerPage={this.state.numberOfItemsPerPage}
          changeCurrentPage={that.changeCurrentPage}
        />
      </div>
    );
  }
}

export default EmployeesList;
