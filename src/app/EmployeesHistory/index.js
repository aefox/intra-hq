import React from 'react';
import EmployeeDetails from './Components/EmployeeDetails';
import EmployeeSummary from './Components/EmployeeSummary';
import './EmployeeHistory.css';

const EmployeeHistory = () =>
  <div>
    <EmployeeSummary />
    <br />
    <br />
    <EmployeeDetails />
  </div>;

export default EmployeeHistory;
