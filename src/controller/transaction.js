const TransactionModel = require('../models/transaction');

const transaction = async (req, res) => {
    try {
        const email = req.user.email;
        const { service_code } = req.body;

        // ambil service
        const [services] = await TransactionModel.getServiceByCode(service_code);
        if (services.length === 0) {
            return res.json({
                status: 400,
                message: 'Service tidak ditemukan',
                data: null
            });
        }

        const service = services[0];

        // cek saldo
        const [users] = await TransactionModel.getUserBalance(email);
        if (users[0].balance < service.service_tariff) {
            return res.json({
                status: 102,
                message: 'Saldo tidak mencukupi',
                data: null
            });
        }

        // generate invoice
        const invoice = `INV-${Date.now()}`;

        // deduct balance
        await TransactionModel.deductBalance(service.service_tariff, email);

        // insert transaction
        await TransactionModel.insertTransaction({
            invoice_number: invoice,
            email,
            service_code: service.service_code,
            service_name: service.service_name,
            transaction_type: 'PAYMENT',
            total_amount: service.service_tariff
        });

        return res.json({
            status: 200,
            message: 'Transaksi berhasil',
            data: {
                invoice_number: invoice,
                service_code: service.service_code,
                service_name: service.service_name,
                transaction_type: 'PAYMENT',
                total_amount: service.service_tariff,
                created_on: new Date()
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
    transaction
};