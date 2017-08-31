import React from 'react';
import EmployeeDetails from './Components/employeeDetails';
import EmployeeSummary from './Components/employeeSummary';
import './EmployeeHistory.css';

const EmployeeHistory = () =>
  <div>
    <EmployeeSummary />
    <br />
    <br />
    <EmployeeDetails />
  </div>;

export default EmployeeHistory;
