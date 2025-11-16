import React, { useState, useEffect } from 'react';
import { documentService } from '../services/api';

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const response = await documentService.getAll();
      setDocuments(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch documents: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading documents...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card">
      <h1>Documents</h1>
      <p>Manage audit-related documents and files.</p>
      
      <table style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>File Name</th>
            <th>File Type</th>
            <th>Size</th>
            <th>Audit</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.title}</td>
              <td>{doc.fileName}</td>
              <td>{doc.fileType || '-'}</td>
              <td>{doc.fileSize ? `${(doc.fileSize / 1024).toFixed(2)} KB` : '-'}</td>
              <td>{doc.audit ? doc.audit.title : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Documents;
