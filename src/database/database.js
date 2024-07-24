const config = require('../config');

module.exports = {
  development: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    host: config.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    host: config.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    host: config.DB_HOST,
    dialect: 'mysql',
  },
};
