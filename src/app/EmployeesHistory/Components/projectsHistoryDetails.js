import React from 'react';
import ProjectsTimeline from './ProjectsTimeline';
import EmployeeHistoryProvider from '../employeeHistoryProvider';

const ProjectsHistoryDetails = props => {
  const projectsTimeline = EmployeeHistoryProvider.getProjectsTimeline();

  return (
    <div>
      <strong>Projects</strong>
      <ProjectsTimeline projectsTimeline={projectsTimeline} />
    </div>
  );
};

export default ProjectsHistoryDetails;
