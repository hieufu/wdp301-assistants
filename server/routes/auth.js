const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
router.post('/register', register);

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
router.post('/login', login);

// @desc    Get current user
// @route   GET /api/v1/auth/me
// @access  Private
router.get('/me', auth, getMe);

module.exports = router;