const InformationModel = require('../models/information');

const getBanner = async (req, res) => {
    try {
        const [rows] = await InformationModel.getAllBanner();

        return res.json({
            status: 200,
            message: 'Sukses',
            data: rows
        });

    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: 'Internal Server Error',
            data: null
        });
    }
};

const getServices = async (req, res) => {
    try {
        const [rows] = await InformationModel.getAllServices();

        return res.json({
            status: 200,
            message: 'Sukses',
            data: rows
        });

    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: 'Internal Server Error',
            data: null
        });
    }
};

module.exports = {
    getBanner,
    getServices
};
