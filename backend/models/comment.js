module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    auditId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'audits',
        key: 'id'
      }
    },
    findingId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'findings',
        key: 'id'
      }
    }
  }, {
    tableName: 'comments',
    timestamps: true
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
    Comment.belongsTo(models.Audit, {
      foreignKey: 'auditId',
      as: 'audit'
    });
    Comment.belongsTo(models.Finding, {
      foreignKey: 'findingId',
      as: 'finding'
    });
  };

  return Comment;
};
