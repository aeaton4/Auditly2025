import React, { useState, useEffect } from 'react';
import { auditService } from '../services/api';

function Audits() {
  const [audits, setAudits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAudits();
  }, []);

  const fetchAudits = async () => {
    try {
      setLoading(true);
      const response = await auditService.getAll();
      setAudits(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch audits: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading audits...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card">
      <h1>Audits</h1>
      <p>View and manage audit projects.</p>
      
      <table style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Assigned User</th>
          </tr>
        </thead>
        <tbody>
          {audits.map(audit => (
            <tr key={audit.id}>
              <td>{audit.id}</td>
              <td>{audit.title}</td>
              <td>{audit.status}</td>
              <td>{audit.startDate ? new Date(audit.startDate).toLocaleDateString() : '-'}</td>
              <td>{audit.endDate ? new Date(audit.endDate).toLocaleDateString() : '-'}</td>
              <td>{audit.assignedUser ? `${audit.assignedUser.firstName} ${audit.assignedUser.lastName}` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Audits;
