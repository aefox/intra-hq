import React from 'react';
import ProjectsHistoryDetails from './projectsHistoryDetails';
import Evaluations from './evaluations';

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
