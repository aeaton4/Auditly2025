module.exports = (sequelize, DataTypes) => {
  const Finding = sequelize.define('Finding', {
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
    severity: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'medium',
      validate: {
        isIn: [['low', 'medium', 'high', 'critical']]
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'open',
      validate: {
        isIn: [['open', 'in-review', 'resolved', 'closed']]
      }
    },
    auditId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'audits',
        key: 'id'
      }
    }
  }, {
    tableName: 'findings',
    timestamps: true
  });

  Finding.associate = (models) => {
    Finding.belongsTo(models.Audit, {
      foreignKey: 'auditId',
      as: 'audit'
    });
    Finding.hasMany(models.Comment, {
      foreignKey: 'findingId',
      as: 'comments'
    });
  };

  return Finding;
};
