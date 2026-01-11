const msql = require('mysql2');

const dbPool = msql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLSATABASE
});

module.exports = dbPool.promise();