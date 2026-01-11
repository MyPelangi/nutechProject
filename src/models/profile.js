const dbPool = require('../config/database');

const getProfileByEmail = (email) => {
    const SQLQuery = `
        SELECT 
            email,
            first_name,
            last_name,
            profile_image
        FROM users
        WHERE email = ?
        AND is_active = 1
        LIMIT 1
    `;

    return dbPool.execute(SQLQuery, [email]);
};

const updateProfile = (body, email) => {
    const SQLQuery = `
        UPDATE users
        SET
            first_name = ?,
            last_name = ?,
            updated_at = NOW(),
            updated_by = ?
        WHERE LOWER(email) = LOWER(?)
    `;

    return dbPool.execute(SQLQuery, [
        body.first_name,
        body.last_name,
        email,
        email
    ]);
};

const updateProfileImage = (imageUrl, email) => {
    const SQLQuery = `
        UPDATE users
        SET
            profile_image = ?,
            updated_at = NOW(),
            updated_by = ?
        WHERE LOWER(email) = LOWER(?)
    `;

    return dbPool.execute(SQLQuery, [
        imageUrl,
        email,
        email
    ]);
};

module.exports = {
    getProfileByEmail,
    updateProfile,
    updateProfileImage
};