const dotEnv = require('dotenv');

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';
dotEnv.config({ path: envFile });

module.exports = {
    PORT: process.env.PORT,

    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
};
