// routes/index.js

const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controller/CreateList');

// Serve index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Handle form submission - POST /submit
router.post('/submit', userController.createUser);

module.exports = router;
