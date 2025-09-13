import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
    padding: '1rem 0'
  };

  return (
    <div style={listStyle}>
      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </div>
  );
}

export default ProjectList;