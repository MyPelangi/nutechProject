const msql = require('mysql2');

const dbPool = msql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

dbPool.getConnection((err, conn) => {
    if (err) {
        console.error('❌ Gagal connect ke MySQL:', err.message);
    } else {
        console.log('✅ Berhasil connect ke MySQL');
        conn.release();
    }
});

module.exports = dbPool.promise();