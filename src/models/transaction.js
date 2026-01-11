const dbPool = require('../config/database');

const getServiceByCode = (service_code) => {
    return dbPool.execute(
        `SELECT * FROM services WHERE service_code = ? AND is_active = 1`,
        [service_code]
    );
};

const getUserBalance = (email) => {
    return dbPool.execute(
        `SELECT balance FROM users WHERE email = ?`,
        [email]
    );
};

const deductBalance = (amount, email) => {
    return dbPool.execute(
        `UPDATE users SET balance = balance - ? WHERE email = ?`,
        [amount, email]
    );
};

const insertTransaction = (data) => {
    const SQL = `
        INSERT INTO transactions
        (invoice_number, email, service_code, service_name, transaction_type, total_amount)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    return dbPool.execute(SQL, [
        data.invoice_number,
        data.email,
        data.service_code,
        data.service_name,
        data.transaction_type,
        data.total_amount
    ]);
};

module.exports = {
    getServiceByCode,
    getUserBalance,
    deductBalance,
    insertTransaction
};