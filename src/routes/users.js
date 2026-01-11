const express = require('express');
const userController = require('../controller/users');

const router = express.Router();

// CREATE --POST
router.get('/', userController.getAllUsers);

router.post('/', userController.createNewUser);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;