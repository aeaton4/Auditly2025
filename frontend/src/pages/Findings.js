import React, { useState, useEffect } from 'react';
import { findingService } from '../services/api';

function Findings() {
  const [findings, setFindings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFindings();
  }, []);

  const fetchFindings = async () => {
    try {
      setLoading(true);
      const response = await findingService.getAll();
      setFindings(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch findings: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading findings...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card">
      <h1>Findings</h1>
      <p>Track audit findings and issues.</p>
      
      <table style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Audit</th>
          </tr>
        </thead>
        <tbody>
          {findings.map(finding => (
            <tr key={finding.id}>
              <td>{finding.id}</td>
              <td>{finding.title}</td>
              <td>{finding.severity}</td>
              <td>{finding.status}</td>
              <td>{finding.audit ? finding.audit.title : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Findings;
