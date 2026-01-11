const dbPool = require('../config/database');

const getPaymentHistory = (email) => {
    return dbPool.execute(`
        SELECT 
            invoice_number,
            'PAYMENT' AS transaction_type,
            service_name AS description,
            total_amount,
            created_on
        FROM transactions
        WHERE email = ?
    `, [email]);
};

const getTopupHistory = (email) => {
    return dbPool.execute(`
        SELECT 
            CONCAT('TOPUP-', id) AS invoice_number,
            'TOPUP' AS transaction_type,
            'Top Up Balance' AS description,
            amount AS total_amount,
            created_at AS created_on
        FROM topup_history
        WHERE email = ?
    `, [email]);
};

module.exports = {
    getPaymentHistory,
    getTopupHistory
};
