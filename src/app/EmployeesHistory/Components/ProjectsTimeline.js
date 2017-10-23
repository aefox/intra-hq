import React from 'react';

const ProjectsTimeline = props => {
  const timelines = props.projectsTimeline.map((projectTimeline, index) => {
    return (
      <li key={index}>
        <strong>{projectTimeline.projectName}</strong> : ({projectTimeline.startDate}{' '}
        - {projectTimeline.endDate})
      </li>
    );
  });

  return (
    <ul>
      {timelines}
    </ul>
  );
};

export default ProjectsTimeline;
