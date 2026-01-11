const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({
            status: 401,
            message: 'Token tidak tidak valid atau kadaluwarsa',
            data: null
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { email: ... }
        next();
    } catch (err) {
        return res.json({
            status: 401,
            message: 'Token tidak tidak valid atau kadaluwarsa',
            data: null
        });
    }
};

module.exports = authenticateJWT;
