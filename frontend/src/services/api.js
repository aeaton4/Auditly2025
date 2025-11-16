import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic CRUD functions
const createCRUDService = (endpoint) => ({
  getAll: () => api.get(`/${endpoint}`),
  getById: (id) => api.get(`/${endpoint}/${id}`),
  create: (data) => api.post(`/${endpoint}`, data),
  update: (id, data) => api.put(`/${endpoint}/${id}`, data),
  delete: (id) => api.delete(`/${endpoint}/${id}`),
});

export const userService = createCRUDService('users');
export const auditService = createCRUDService('audits');
export const findingService = createCRUDService('findings');
export const riskService = createCRUDService('risks');
export const documentService = createCRUDService('documents');
export const commentService = createCRUDService('comments');

export default api;
