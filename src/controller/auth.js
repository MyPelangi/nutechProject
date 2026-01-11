const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthModel = require('../models/auth');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await AuthModel.findByEmail(email);

        // Email tidak ditemukan
        if (rows.length === 0) {
            return res.json({
                status: 401,
                message: 'Username atau password salah',
                data: null
            });
        }

        const user = rows[0];

        // Password salah
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({
                status: 401,
                message: 'Username atau password salah',
                data: null
            });
        }

        // Generate JWT
        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '12h' }
        );

        return res.json({
            status: 200,
            message: 'Login Sukses',
            data: {
                token
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Login gagal',
            data: null
        });
    }
};

const register = async (req, res) => {
    const body = req.body;

    try {
        
        body.password = await bcrypt.hash(body.password, 10);

        await AuthModel.register(body);

        return res.json({
            status: 200,
            message: 'Registrasi berhasil silahkan login',
            data: null
        });
    } catch (error) {
        console.error(error);

        // Handle duplicate
        if (error.code === 'ER_DUP_ENTRY') {
            return res.json({
                status: 400,
                message: 'Email sudah terdaftar',
                data: null
            });
        }

        return res.status(500).json({
            status: 500,
            message: 'Registrasi tidak berhasil',
            data: null
        });
    }
};


module.exports = {
    register,
    login
}