const dbPool = require('../config/database');

const addBalance = (amount, email) => {
    const SQLQuery = `
        UPDATE users
        SET balance = balance + ?
        WHERE email = ?
    `;
    return dbPool.execute(SQLQuery, [amount, email]);
};

const getBalanceByEmail = (email) => {
    const SQLQuery = `
        SELECT balance FROM users WHERE email = ?
    `;
    return dbPool.execute(SQLQuery, [email]);
};

const insertTopupHistory = (email, amount) => {
    const SQLQuery = `
        INSERT INTO topup_history (email, amount)
        VALUES (?, ?)
    `;
    return dbPool.execute(SQLQuery, [email, amount]);
};

module.exports = {
    addBalance,
    getBalanceByEmail,
    insertTopupHistory
};
