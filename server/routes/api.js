// routes/api.js
const express = require('express');
const router = express.Router();

// Controllers
const exampleController = require('../controllers/exampleController');

// Routes
router.get('/example', exampleController.getExample);

module.exports = router;
