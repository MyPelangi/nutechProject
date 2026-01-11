const msql = require('mysql2');

const dbPool = msql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = dbPool.promise();