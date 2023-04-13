// express routing
const express = require('express');
const router = express.Router();

const bodyController = require('../controllers/request/request.body.controller');
const headerController = require('../controllers/request/request.headers.controller');

const adminViewController = require('../controllers/administration.view.controller');
const adminCreateController = require('../controllers/administration.create.controller');

const authController = require('../controllers/authentication.controller');
const userController = require('../controllers/users.controller');

router.use([headerController, bodyController]);

// route handling
router.post('/admin/create', adminCreateController);
router.post('/admin/view', adminViewController);
router.post('/authentication', authController);
router.post('/user', userController);

module.exports = router;