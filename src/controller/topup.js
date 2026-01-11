const TopupModel = require('../models/balance');

const topup = async (req, res) => {
    try {
        const email = req.user.email;
        const { top_up_amount } = req.body;

        // VALIDASI AMOUNT
        if (!top_up_amount || isNaN(top_up_amount) || top_up_amount <= 0) {
            return res.json({
                status: 400,
                message: 'Parameter amount hanya boleh angka dan tidak boleh lebih kecil dari 0',
                data: null
            });
        }

        // UPDATE BALANCE
        await TopupModel.addBalance(top_up_amount, email);

        // INSERT HISTORY
        await TopupModel.insertTopupHistory(email, top_up_amount);

        // GET BALANCE TERBARU
        const [rows] = await TopupModel.getBalanceByEmail(email);

        return res.json({
            status: 200,
            message: 'Top Up Balance berhasil',
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
    topup
};
