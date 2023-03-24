// express routing
const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');
const validator = require('../utils/validations');


// route handling
router.post('/authentication',[validator.hasBody, controller.authentication]);
router.post('/user', [validator.hasValidHeaders, validator.hasBody, controller.user]);

// EXPORT
module.exports = router;