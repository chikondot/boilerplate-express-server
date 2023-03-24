// express routing
const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

// route handling
router.post('/authentication', controller.authentication);
router.post('/user', [controller.validation, controller.user]);

// EXPORT
module.exports = router;