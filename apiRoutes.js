const express = require('express');
const router = express.Router();
const { getAllAPIs, addAPI } = require('../controllers/apiController');
const authMiddleware = require('../middleware/authMiddleware');
const rateLimiter = require('../middleware/rateLimiter');

router.get('/apis', rateLimiter, getAllAPIs);
router.post('/apis', authMiddleware, addAPI);

module.exports = router;
