const ProfileModel = require('../models/profile');

const getProfile = async (req, res) => {
    try {
        
        const email = req.user.email;

        const [rows] = await ProfileModel.getProfileByEmail(email);

        if (rows.length === 0) {
            return res.json({
                status: 404,
                message: 'User tidak ditemukan',
                data: null
            });
        }

        const user = rows[0];

        return res.json({
            status: 200,
            message: 'Sukses',
            data: {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                profile_image: user.profile_image
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Server Error',
            data: null
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const email = req.user.email;
        const { first_name, last_name, profile_image } = req.body;

        const [result] = await ProfileModel.updateProfile(
            { first_name, last_name, profile_image },
            email
        );

        if (result.affectedRows === 0) {
            return res.json({
                status: 401,
                message: 'Profile tidak di temukan',
                data: null
            });
        }

        return res.json({
            status: 200,
            message: 'Update Profile berhasil',
            data: {
                email,
                first_name,
                last_name,
                profile_image
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

const uploadProfileImage = async (req, res) => {
    try {
        const email = req.user.email;

        if (!req.file) {
            return res.json({
                status: 400,
                message: 'Format Image tidak sesuai',
                data: null
            });
        }

        const imageUrl = `https://localhost:4000/${req.file.path}`;

        const [result] = await ProfileModel.updateProfileImage(
            imageUrl,
            email
        );

        if (result.affectedRows === 0) {
            return res.json({
                status: 401,
                message: 'Token tidak tidak valid atau kadaluwarsa',
                data: null
            });
        }

        const [rows] = await ProfileModel.getProfileByEmail(email);
        const user = rows[0];

        return res.json({
            status: 200,
            message: 'Update Profile Image berhasil',
            data: {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                profile_image: user.profile_image
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
    getProfile,
    updateProfile,
    uploadProfileImage
}