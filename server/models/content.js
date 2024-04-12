const Sequelize = require('sequelize');

module.exports = class Content extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: false, // NOT NULL
        },
        texts: {
          type: Sequelize.TEXT('long'),
          allowNull: false,
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
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE, // DATETIME
          allowNull: false,
          defaultValue: sequelize.NOW,
        },
      },
      {
        sequelize,
        timetamps: true,
        underscored: false,
        paranoid: false,
        modelName: 'Content',
        tableName: 'contents',
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
