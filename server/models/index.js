const Sequelize = require('sequelize');
const user = require('./user');
const content = require('./content');
const config = require('../config/config');

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
