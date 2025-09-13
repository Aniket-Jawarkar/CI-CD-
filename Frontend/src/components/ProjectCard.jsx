

// ProjectCard.jsx
import React from "react";

function ProjectCard({ project }) {
  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer'
  };

  const titleStyle = {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    color: '#2c3e50',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    margin: '0 0 1rem 0',
    color: '#666',
    lineHeight: '1.5'
  };

  const statusStyle = {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: getStatusColor(project.status),
    color: 'white'
  };

  function getStatusColor(status) {
    switch(status) {
      case 'Completed': return '#27ae60';
      case 'In Progress': return '#f39c12';
      case 'Planned': return '#3498db';
      default: return '#95a5a6';
    }
  }

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
    >
      <h3 style={titleStyle}>{project.name}</h3>
      <p style={descriptionStyle}>{project.description}</p>
      <span style={statusStyle}>Status: {project.status}</span>
    </div>
  );
}

export default ProjectCard;