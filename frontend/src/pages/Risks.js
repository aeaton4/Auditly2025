import React, { useState, useEffect } from 'react';
import { riskService } from '../services/api';

function Risks() {
  const [risks, setRisks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRisks();
  }, []);

  const fetchRisks = async () => {
    try {
      setLoading(true);
      const response = await riskService.getAll();
      setRisks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch risks: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading risks...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card">
      <h1>Risks</h1>
      <p>Assess and manage audit risks.</p>
      
      <table style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Likelihood</th>
            <th>Impact</th>
            <th>Status</th>
            <th>Audit</th>
          </tr>
        </thead>
        <tbody>
          {risks.map(risk => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.title}</td>
              <td>{risk.likelihood}</td>
              <td>{risk.impact}</td>
              <td>{risk.status}</td>
              <td>{risk.audit ? risk.audit.title : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Risks;
