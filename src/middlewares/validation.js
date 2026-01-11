const validateRegister = (req, res, next) => {
    const { email, password } = req.body;

    // regex email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // VALIDASI EMAIL
    if (!email || !emailRegex.test(email)) {
        return res.json({
            status: 400,
            message: 'Parameter email tidak sesuai format',
            data: null
        });
    }

    // VALIDASI PASSWORD
    if (!password || password.length < 8) {
        return res.json({
            status: 400,
            message: 'Password minimal 8 karakter',
            data: null
        });
    }

    // lolos validasi : lanjut ke controller
    next();
};

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validasi email
    if (!email || !emailRegex.test(email)) {
        return res.json({
            status: 400,
            message: 'Parameter email tidak sesuai format',
            data: null
        });
    }

    // validasi password
    if (!password) {
        return res.json({
            status: 400,
            message: 'Password wajib diisi',
            data: null
        });
    }

    next();
};

module.exports = {
    validateRegister,
    validateLogin
};
