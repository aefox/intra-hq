import React from 'react';
import ProjectsHistoryDetails from './ProjectsHistoryDetails';
import Evaluations from './Evaluations';

const EmployeeDetails = () => {
  return (
    <div>
      <strong>Employee Details</strong>
      <hr style={{ borderTop: 'dotted 1p' }} />
      <ProjectsHistoryDetails />
      <br />
      <Evaluations />
    </div>
  );
};

export default EmployeeDetails;
