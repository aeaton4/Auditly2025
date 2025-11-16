module.exports = (sequelize, DataTypes) => {
  const Risk = sequelize.define('Risk', {
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
    likelihood: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'medium',
      validate: {
        isIn: [['low', 'medium', 'high']]
      }
    },
    impact: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'medium',
      validate: {
        isIn: [['low', 'medium', 'high']]
      }
    },
    mitigation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'identified',
      validate: {
        isIn: [['identified', 'assessed', 'mitigated', 'accepted']]
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
    tableName: 'risks',
    timestamps: true
  });

  Risk.associate = (models) => {
    Risk.belongsTo(models.Audit, {
      foreignKey: 'auditId',
      as: 'audit'
    });
  };

  return Risk;
};
