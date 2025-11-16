import React from 'react';

function Home() {
  return (
    <div className="card">
      <h1>Welcome to Auditly2025</h1>
      <p>A comprehensive audit tracking and management system.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Features</h2>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>User Management</li>
          <li>Audit Planning and Tracking</li>
          <li>Finding Documentation</li>
          <li>Risk Assessment</li>
          <li>Document Management</li>
          <li>Comments and Collaboration</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Getting Started</h2>
        <p>Use the navigation menu above to access different sections of the application.</p>
      </div>
    </div>
  );
}

export default Home;
