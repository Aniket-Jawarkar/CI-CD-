import React from "react";

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const liStyle = {
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#34495e'
    }
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>Project Manager</h1>
      <ul style={ulStyle}>
        <li style={liStyle}>Home</li>
        <li style={liStyle}>Dashboard</li>
      </ul>
    </nav>
  );
}

export default Navbar;