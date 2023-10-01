const Sequelize = require('sequelize');
const user = require('./user');
const content = require('./content');

// 배포 시에 'product'로 바꾸기
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = user;
db.Content = content;

user.init(sequelize);
content.init(sequelize);

user.associate(db);
content.associate(db);

module.exports = db;
