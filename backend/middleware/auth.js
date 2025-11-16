// Mock authentication middleware
// In production, this should validate JWT tokens or session cookies

const mockAuth = (req, res, next) => {
  // Mock user - in production this would come from JWT or session
  req.user = {
    id: 1,
    username: 'admin',
    email: 'admin@auditly.com',
    role: 'admin'
  };
  
  next();
};

const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden - insufficient permissions' });
    }
    
    next();
  };
};

module.exports = {
  mockAuth,
  requireRole
};
