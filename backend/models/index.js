const { Sequelize } = require('sequelize');
const config = require('../config/database.js');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./user')(sequelize, Sequelize);
db.Audit = require('./audit')(sequelize, Sequelize);
db.Finding = require('./finding')(sequelize, Sequelize);
db.Risk = require('./risk')(sequelize, Sequelize);
db.Document = require('./document')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

// Define associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
