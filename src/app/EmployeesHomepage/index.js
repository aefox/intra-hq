import React from 'react';
//import React, { Component } from 'react';
import EmployeesList from './EmployeesList';
const employees = [
  {
    id: '1',
    name: 'Gigel',
    position: 'Developer',
    technology: 'Javascript',
    project: 'Q-Park',
    manager: 'Marcel'
  },
  {
    id: '2',
    name: 'Vasile',
    position: 'Tester',
    technology: 'Java',
    project: 'Q-Park',
    manager: 'Ion'
  },
  {
    id: '3',
    name: 'Vasile',
    position: 'Tester',
    technology: 'Java',
    project: 'Q-Park',
    manager: 'Ion'
  }
];

let employeesFiltered = employees.slice();

const Mock = ({ match }) =>
  <div className="Employees">
    <EmployeesList
      employees={employees}
      employeesFiltered={employeesFiltered}
    />
  </div>;

export default Mock;
