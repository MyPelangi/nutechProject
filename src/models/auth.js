const dbPool = require('../config/database');

const register = (body) => {
    const SQLQuery = `
        INSERT INTO users
        (
            first_name,
            last_name,
            email,
            password,
            profile_image,
            is_active,
            created_at,
            updated_at,
            updated_by
        )
        VALUES (?, ?, ?, ?, ?, 1, NOW(), NOW(), ?)
    `;

    const values = [
        body.first_name,
        body.last_name,
        body.email,
        body.password, //hash
        body.profile_image || null,
        `${body.first_name}.${body.last_name}`
    ];

    return dbPool.execute(SQLQuery, values);
};

const findByEmail = (email) => {
    const SQLQuery = `
        SELECT id, email, password
        FROM users
        WHERE email = ?
        AND is_active = 1
        LIMIT 1
    `;
    return dbPool.execute(SQLQuery, [email]);
};

module.exports = {
    register,
    findByEmail
}