// express routing
const express = require('express');
const router = express.Router();

const bodyController = require('../controllers/request/requestBody');
const headerController = require('../controllers/request/requestHeaders');

const adminViewController = require('../controllers/adminView');
const adminCreateController = require('../controllers/adminCreate');

const authController = require('../controllers/authentication');
const userController = require('../controllers/users');

router.use([headerController, bodyController]);

// route handling
router.post('/admin/create', adminCreateController);
router.post('/admin/view', adminViewController);
router.post('/authentication',authController);
router.post('/user', userController);

module.exports = router;