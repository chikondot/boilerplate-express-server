// express routing
const express = require('express');
const router = express.Router();

// route handling POST request
router.post('/post', (req, res, next) => {
    if (req.body == null) {
        res.status(400).json({ error: "Please provide values" });
        return;
    };

    try {
        // logic goes here for processing
        res.status(200).json({ message: "requests working!" });
        return;
    } catch (err) {
        console.error("DEBUGGING : current error in POST >>>", err);
        next(err); // Pass errors to Express.
    }
});

module.exports = router;