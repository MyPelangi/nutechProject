const BalanceModel = require('../models/balance');

const getBalance = async (req, res) => {
    try {
        
        const email = req.user.email;

        const [rows] = await BalanceModel.getBalanceByEmail(email);

        if (rows.length === 0) {
            return res.json({
                status: 400,
                message: 'Profile tidak di temukan',
                data: null
            });
        }

        return res.json({
            status: 200,
            message: 'Get Balance Berhasil',
            data: {
                balance: rows[0].balance
            }
        });

    } catch (error) {
        console.error(error);
        return res.json({
            status: 401,
            message: 'Token tidak tidak valid atau kadaluwarsa',
            data: null
        });
    }
};

module.exports = {
    getBalance
};
