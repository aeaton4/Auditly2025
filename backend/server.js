require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');
const { mockAuth } = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock authentication (apply to all routes)
app.use(mockAuth);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Auditly API is running' });
});

// API routes
app.use('/api', routes);

// Error handling middleware (must be last)
app.use(errorHandler);

// Database connection and server start
const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Sync models in development (use migrations in production)
    if (process.env.NODE_ENV === 'development') {
      // await db.sequelize.sync({ alter: true });
      console.log('Note: Use migrations to sync database schema.');
    }
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
