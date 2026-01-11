const express = require('express');
const upload = require('../middlewares/multer');
const { validateRegister, validateLogin } = require('../middlewares/validation');
const authenticateJWT = require('../middlewares/authenticateJWT');
const multerErrorHandler = require('../middlewares/multerErrorHandler');

const AuthController = require('../controller/auth');
const ProfileController = require('../controller/profile');
const InformationController = require('../controller/information');
const BalanceController = require('../controller/balance');
const TopupController = require('../controller/topup');
const TransactionController = require('../controller/transaction');
const HistoryController = require('../controller/transactionHistory');

const router = express.Router();

// AUTH
router.post('/login', validateLogin, AuthController.login);
router.post('/registration',validateRegister, AuthController.register);

// Profile
router.get('/profile', authenticateJWT, ProfileController.getProfile);
router.put('/profile/update', authenticateJWT, ProfileController.updateProfile);
router.put('/profile/image',authenticateJWT, upload.single('file'), multerErrorHandler, ProfileController.uploadProfileImage);

// Information
router.get('/banner', InformationController.getBanner);
router.get('/services', authenticateJWT, InformationController.getServices);

// balance
router.get('/balance', authenticateJWT, BalanceController.getBalance);

// topup
router.post('/topup', authenticateJWT, TopupController.topup);

// transaction
router.post('/transaction', authenticateJWT, TransactionController.transaction);

// History
router.get('/transaction/history', authenticateJWT, HistoryController.getHistory);

module.exports = router;