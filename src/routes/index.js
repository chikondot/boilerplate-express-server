// express routing
const express = require('express');
const router = express.Router();

const bodyController = require('../controllers/request/requestBody');
const headerController = require('../controllers/request/requestHeaders');

const authController = require('../controllers/authentication');
const userController = require('../controllers/users');

router.use([headerController, bodyController]);

// route handling
router.post('/authentication',authController);
router.post('/user', userController);

// EXPORT
module.exports = router;