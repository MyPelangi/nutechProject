const dbPool = require('../config/database');

const getAllBanner = () => {
    const SQLQuery = `
        SELECT 
            banner_name,
            banner_image,
            description
        FROM banners
        WHERE is_active = 1
        ORDER BY id ASC
    `;
    return dbPool.execute(SQLQuery);
};

const getAllServices = () => {
    const SQLQuery = `
        SELECT
            service_code,
            service_name,
            service_icon,
            service_tariff
        FROM services
        WHERE is_active = 1
        ORDER BY id ASC
    `;

    return dbPool.execute(SQLQuery);
};

module.exports = {
    getAllBanner,
    getAllServices
};
