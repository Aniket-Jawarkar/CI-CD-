import React, { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import { getProjects, addProject } from "../api";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProject, setNewProject] = useState({ name: "", description: "", status: "Planned" });

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  };

  const titleStyle = {
    color: '#2c3e50',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'end'
  };

  const inputStyle = {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    minWidth: '200px',
    flex: '1'
  };

  const selectStyle = {
    ...inputStyle,
    minWidth: '150px',
    flex: '0 0 auto'
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const loadingStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    padding: '2rem'
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await addProject(newProject);
    setProjects([...projects, created]);
    setNewProject({ name: "", description: "", status: "Planned" });
  };

  if (loading) return <p style={loadingStyle}>Loading projects...</p>;

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Dashboard</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          required
          style={inputStyle}
        />
        <select
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
          style={selectStyle}
        >
          <option>Planned</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Add Project
        </button>
      </form>

      <ProjectList projects={projects} />
    </div>
  );
}

export default Dashboard;