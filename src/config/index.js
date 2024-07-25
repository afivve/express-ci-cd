const dotEnv = require('dotenv');
dotEnv.config();

module.exports = {
    PORT: process.env.PORT,

    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
};
