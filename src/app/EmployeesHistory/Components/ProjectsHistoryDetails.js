import React from 'react';
import ProjectsTimeline from './ProjectsTimeline';

const ProjectsHistoryDetails = props => {
  return (
    <div>
      <strong>Projects</strong>
      <ProjectsTimeline projectsTimeline={props.projectsHistory} />
    </div>
  );
};

export default ProjectsHistoryDetails;
