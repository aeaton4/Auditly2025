import React, { useState, useEffect } from 'react';
import { commentService } from '../services/api';

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await commentService.getAll();
      setComments(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch comments: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading comments...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card">
      <h1>Comments</h1>
      <p>View comments and discussions on audits and findings.</p>
      
      <table style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>User</th>
            <th>Audit</th>
            <th>Finding</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.content.substring(0, 50)}...</td>
              <td>{comment.user ? `${comment.user.firstName} ${comment.user.lastName}` : '-'}</td>
              <td>{comment.audit ? comment.audit.title : '-'}</td>
              <td>{comment.finding ? comment.finding.title : '-'}</td>
              <td>{new Date(comment.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Comments;
