module.exports = (sequelize, DataTypes) => {
  const Audit = sequelize.define('Audit', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'planned',
      validate: {
        isIn: [['planned', 'in-progress', 'completed', 'archived']]
      }
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assignedUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'audits',
    timestamps: true
  });

  Audit.associate = (models) => {
    Audit.belongsTo(models.User, {
      foreignKey: 'assignedUserId',
      as: 'assignedUser'
    });
    Audit.hasMany(models.Finding, {
      foreignKey: 'auditId',
      as: 'findings'
    });
    Audit.hasMany(models.Risk, {
      foreignKey: 'auditId',
      as: 'risks'
    });
    Audit.hasMany(models.Document, {
      foreignKey: 'auditId',
      as: 'documents'
    });
    Audit.hasMany(models.Comment, {
      foreignKey: 'auditId',
      as: 'comments'
    });
  };

  return Audit;
};
