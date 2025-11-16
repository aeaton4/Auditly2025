module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'documents',
    timestamps: true
  });

  Document.associate = (models) => {
    Document.belongsTo(models.Audit, {
      foreignKey: 'auditId',
      as: 'audit'
    });
  };

  return Document;
};
