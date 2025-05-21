// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController'); // Import the loginUser function

// Define the POST route for login
router.post('/auth/login', loginUser);

module.exports = router;