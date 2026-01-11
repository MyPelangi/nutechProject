const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profile');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `profile-${Date.now()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('FORMAT_IMAGE_INVALID'));
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB
    }
});

module.exports = upload;
