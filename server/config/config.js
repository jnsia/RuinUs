module.exports = {
  host: "127.0.0.1",
  database: 'ruinus',
  username: process.env.MYSQL_USERNAME || 'test',
  password: process.env.MYSQL_PASSWORD || 'test',
  dialect: 'mysql',
}
