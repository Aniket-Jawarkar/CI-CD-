import React from "react";

function Home() {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to Project Manager</h2>
      <p style={descriptionStyle}>Track and manage your projects with ease.</p>
    </div>
  );
}

export default Home;