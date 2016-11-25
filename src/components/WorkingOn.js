import React, { PropTypes } from 'react';

const propTypes = {
  projects: PropTypes.array.isRequired,
};

const WorkingOn = ({ projects }) => {
  const hasProjects = projects.length > 0;
  const proj = hasProjects ? (
    projects.map(project => (
      <div key={project.name} className="project-item">
        <div className="project-item-inner">
          <a href={project.html_url}>{project.name}</a>
          <span>{project.language}</span>
        </div>
        <div className="project-item-description">
          {project.description}
        </div>
      </div>
    ))
  ) : (
    <span>I must be taking a vacation...</span>
  );

  return (
    <div className="working-on-container row">
      <div className="inner-wrap small-12 medium-8 large-6 small-centered medium-centered large-centered">
        <h3>I'm currently working on</h3>
        <div className="project-list">
          {proj}
        </div>
      </div>
    </div>
  );
};

WorkingOn.propTypes = propTypes;

export default WorkingOn;
