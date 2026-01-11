const multerErrorHandler = (err, req, res, next) => {
    if (err) {
        if (err.message === 'FORMAT_IMAGE_INVALID') {
            return res.json({
                status: 400,
                message: 'Format Image tidak sesuai',
                data: null
            });
        }

        return res.json({
            status: 400,
            message: err.message,
            data: null
        });
    }

    next();
};

module.exports = multerErrorHandler;