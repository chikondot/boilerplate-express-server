// express routing
const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

// route validate all requests
router.use(controller.validateRequest);

// route handling
router.post('/post', controller.middleware);

// EXPORT
module.exports = router;