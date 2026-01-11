const HistoryModel = require('../models/transactionHistory');

const getHistory = async (req, res) => {
    try {
        const email = req.user.email;

        const offset = parseInt(req.query.offset) || 0;
        const limit = parseInt(req.query.limit) || 10;

        const [payments] = await HistoryModel.getPaymentHistory(email);
        const [topups] = await HistoryModel.getTopupHistory(email);

        // gabung + sort
        const records = [...payments, ...topups]
            .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
            .slice(offset, offset + limit);

        return res.json({
            status: 200,
            message: 'Get History Berhasil',
            data: {
                offset,
                limit,
                records
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
    getHistory
};
