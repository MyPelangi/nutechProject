const msql = require('mysql2');

const dbPool = msql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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