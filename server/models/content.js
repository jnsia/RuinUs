const Sequelize = require('sequelize');

module.exports = class Content extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: true, // NOT NULL
        },
        texts: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        cause: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        sort: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        reserve: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE, // DATETIME
          allowNull: true,
          defaultValue: sequelize.NOW,
        },
      },
      {
        sequelize,
        timetamps: true,
        underscored: false,
        paranoid: true,
        modelName: 'Content',
        tableName: 'Contents',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.Content.belongsTo(db.User, {
      foreignKey: 'writer',
      targetKey: 'id',
    });
  }
};
